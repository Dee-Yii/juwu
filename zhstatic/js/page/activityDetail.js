/**
 * Created by DAY on 16/10/3.
 */
//define([
//    "jquery",
//    "wangEditor",
//],function($) {

// 操作示例 附件上传  -  到阿里云
var workObj = {}; // 附件-应用图标

var page = {
    init: function () {
        this.uploadImg();
        this.initDatePicker();
    },
    onCheckLogin: function () {
        $.ajax({
            type: "get",
            url: "http://www.homeownership.cn/editUser.action",
            dataType: "json",
            data: {
                "password": "123456",
                "phone": "13390517165",
                id: "1"
            },
            success: function (data) {
                console.log(data)
            }
        });
    },
    uploadImg: function () {
        attachUpload('work-attach-container', 'work-add-attach-button', 'work-attach-button-wrapper', 20, workObj);

        /**
         * 附件上传方法 -到阿里云
         * @param attachBox  附件容器
         * @param addBtn  添加按钮
         * @param addBtnWrapper  按钮容器
         * @param limit 限制上传个数
         * @param obj 数据
         */
        function attachUpload(attachBox, addBtn, addBtnWrapper, limit, obj) {
            var userid = "123",
                attachContainer = $('#' + attachBox),
                addAttachButton = $('#' + addBtn);

            var accessid = '', host = '', policyBase64 = '', signature = '', callbackbody = '', expire = 0;

            attachContainer.on('mouseenter', '.attach-box', function () {
                $(this).find('.delt').css('display', 'block');
            });

            attachContainer.on('mouseleave', '.attach-box', function () {
                $(this).find('.delt').css('display', 'none');
            });

            function previewImage(file, callback) {//file为plupload事件监听函数参数中的file对象,callback为预览图片准备完成的回调函数

                if (!file || !/image\//.test(file.type)) return; //确保文件是图片

                if (file.type == 'image/gif') {//gif使用FileReader进行预览,因为mOxie.Image只支持jpg和png
                    var fr = new mOxie.FileReader();
                    fr.onload = function () {
                        callback(fr.result);
                        fr.destroy();
                        fr = null;
                    };
                    fr.readAsDataURL(file.getSource());
                } else {
                    var preloader = new mOxie.Image();
                    preloader.onload = function () {

                        //preloader.downsize( 640, 640 );//先压缩一下要预览的图片,宽300，高300

                        //得到图片src,实质为一个base64编码的数据
                        var imgsrc = preloader.type == 'image/jpeg' ? preloader.getAsDataURL('image/jpeg', 80) : preloader.getAsDataURL();
                        callback && callback(imgsrc); //callback传入的参数为预览图片的url
                        preloader.destroy();
                        preloader = null;
                    };
                    preloader.load(file.getSource());
                }
            }

            function get_signature(callbackFun) {
                $.ajax({
                    type: "get",
                    async: false,
                    //url: "http://122.224.199.228:8060/service/osssignature",
                    //url: "http://122.224.199.228:8080/service/osssignature",
                    url: "http://112.124.3.182:8080/service/osssignature",
                    dataType: "jsonp",
                    contentType: "application/json",
                    jsonp: "callback",
                    //jsonpCallback: "",
                    success: function (data) {
                        var obj = typeof data == "object" ? data : JSON.parse(data);
                        host = obj['host'];
                        policyBase64 = obj['policy'];
                        accessid = obj['accessid'];
                        signature = obj['signature'];
                        expire = parseInt(obj['expire']);
                        callbackbody = obj['callback'];
                        callbackFun();
                    },
                    error: function () {
                        alert( '获取签名信息失败');
                    }
                });
            }

            function set_upload_param(up, callbackFun) {
                //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
                var now = Date.parse(new Date()) / 1000;
                var expireFlag = expire < now + .3;
                if (expireFlag) {

                    get_signature(function () {
                        set_upload_param(up, callbackFun);
                    });
                } else {
                    var key = userid + "/" + new Date().getTime();
                    up.setOption({
                        'url': host,
                        'multipart_params': {
                            'key': key,
                            'policy': policyBase64,
                            'OSSAccessKeyId': accessid,
                            'success_action_status': '200', //让服务端返回200,不然，默认会返回204
                            'callback': callbackbody,
                            'signature': signature,
                            'x:usertype': "1",
                            'x:userid': userid,
                            'x:channel': "3"
                        }
                    });
                    callbackFun();
                }
            }

            var attachUploader = new plupload.Uploader({
                runtimes: "html5,flash,silverlight,html4",
                browse_button: addBtn,
                container: document.getElementById(addBtnWrapper),
                url: "http://oss-cn-shanghai.aliyuncs.com",
                flash_swf_url: "/js/vendor/Moxie.swf",
                silverlight_xap_url: "/js/vendor/Moxie.xap",
                filters: {
                    max_file_size: '10mb',
                    mime_types: [ //只允许上传图片
                        {title: "Image files", extensions: "jpg,jpeg,gif,png,JPG,JPEG,GIF,PNG"}
                    ],
                    prevent_duplicates: true //不允许选取重复文件
                },
                multi_selection: false,
                init: {
                    PostInit: function (up) {
                        attachContainer.on('click', '.delt', function () {
                            var fileid = $(this).attr('data-fileid');
                            if (obj[fileid]) delete obj[fileid];
                            up.removeFile(fileid);
                            $(this).parent().remove();
                        });
                    },

                    Browse: function (up) {
                    },

                    FilesAdded: function (up, files) {
                        var size = attachContainer.find('li').not('#' + addBtnWrapper).size();
                        var totalLength = size + files.length;
                        if (totalLength > limit) {
                            up.splice(size <= limit ? size : limit, totalLength - limit);
                            files.splice(limit - size, totalLength - limit);
                            alert( "最多上传" + limit + "个");
                        }
                        plupload.each(files, function (file) {
                            var fileid = file.id;
                            previewImage(file, function (imgsrc) {
                                var pictureString = '<li class="attach-box">' +
                                    '<a class="delt heit" href="javascript:;" data-fileid="' + fileid + '">X</a>' +
                                    '<img src="' + imgsrc + '" alt="">' +
                                    '</li>';

                                addAttachButton.parent().before(pictureString);
                            });
                        });
                        set_upload_param(up, function () {
                            up.start();
                        });
                    },
                    BeforeUpload: function (up, file) {
                        up.settings.multipart_params['x:filename'] = file.name;
                    },
                    FileUploaded: function (up, file, info) {
                        // Called when file has finished uploading
                        set_upload_param(up, function () {
                            if (info.status == 200) {
                                var response = JSON.parse(info.response);
                                obj[file.id] = response.id;
                                console.log(obj);
                            }
                        });

                    },
                    QueueChanged: function (up) {
                    },
                    Error: function (up, args) {
                        switch (args.code) {
                            case -601:
                                alert( "只能上传图片");
                                break;
                            case -602:
                                alert( "不能重复上传");
                                break;
                        }
                    }
                }
            });

            attachUploader.init();
        }
    },
    initDatePicker: function() {
            $('#dateStart').datetimepicker({
                lang: 'ch',
                timepicker: false,
                format: 'Y-m-d',
                formatDate: 'Y-m-d',
                scrollInput: false,
                validateOnBlur: false,
                onShow: function (ct) {
                    this.setOptions({
                        maxDate: $('#dateEnd').val() ? $('#dateEnd').val() : '+1970-01-01'
                    })
                },
                // minDate:'-1970-01-01',

                //yearStart: 2016,     //设置最小年份
                //yearEnd: 2050,        //设置最大年份
            });
            $('#dateEnd').datetimepicker({
                lang: 'ch',
                timepicker: false,
                format: 'Y-m-d',
                formatDate: 'Y-m-d',
                scrollInput: false,
                validateOnBlur: false,
                maxDate: '+1970-01-01',
                onShow: function (ct) {
                    this.setOptions({
                        minDate: $('#dateStart').val() ? $('#dateStart').val() : '+1970-01-01'
                    })
                }
            })
    }
};
page.init();
//})