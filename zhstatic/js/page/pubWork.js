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