/**
 * Created by DAY on 16/10/5.
 */
var common = {
    init: function(){
        //this.initUser();
        this.onLogin();
        //this.initDatePicker();
        this.initModal();
    },
    initUser: function () {
        $.ajax({
            type: "post",
            url: "http://www.homeownership.cn/userInfo.action",
            data: {
                "userid":"123456",
                //"phone":"13390517165",
                //id:"1"
            },
            dataType: "jsonp",
            success: function(data){
                console.log(data)
            }
        });
    },
    onLogin: function () {
        $(".J_login").on("click", function(){
            $("#loginModal").fadeIn();
        });
        $(".J_submitLogin").on("click", function(){
            var phone = $("#tel-number").val().trim() || "13390517165";
            var password = $("#password").val().trim() || "123456";
            $.ajax({
                type: "post",
                url: "http://www.homeownership.cn/login.action",
                dataType: "json",
                data: {
                    "password": password,
                    "phone": phone
                },
                success: function (data) {
                    var data = {
                        userid: 1,
                        imgurl: "../../zhstatic/images/userCenter/product.jpg",
                        credits:300,
                        message:2
                    }
                    sessionStorage.advmasterid = data;
                    $("#avatar").attr("src",data.imgurl);
                    $("#credits").text(data.credits);
                    $(".message").text(date.message);
                    $(".logined").show().siblings(".login").hide();
                    $(".modal-container").fadeOut();
                },
                error: function (res) {
                    console.log(res)
                }
            });
        });
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
        });

        $('#timeStart').datetimepicker({
            lang: 'ch',
            step: '30',
            format: 'Y-m-d H:i',
            formatDate: 'Y-m-d H:i',
            minDate: '-1970-01-01',
            scrollInput: false,
            validateOnBlur: false,
            onShow: function (ct) {
                this.setOptions({
                    maxDate: $('#timeEnd').val() ? $('#timeEnd').val() : false
                })
            }
            //maxDate:'+1970-01-01' // and tommorow is maximum date calendar
            //yearStart: 2016,     //设置最小年份
            //yearEnd: 2050,        //设置最大年份
        });
        $('#timeEnd').datetimepicker({
            lang: 'ch',
            step: '30',
            format: 'Y-m-d H:i',
            formatDate: 'Y-m-d H:i',
            minDate: '-1970-01-01',
            yearStart: 2016,     //设置最小年份
            yearEnd: 2050,        //设置最大年份
            scrollInput: false,
            validateOnBlur: false,
            onShow: function (ct) {
                this.setOptions({
                    minDate: $('#timeStart').val() ? $('#timeStart').val() : false
                })
            }
        });
    },
    initModal: function () {
        $(".modal-close").on("click", function(){
            $(".modal-container").fadeOut();
        });
    },
};
common.init();