/**
 * Created by DAY on 16/10/3.
 */
//define([
//    "jquery",
//    "wangEditor",
//],function($) {
    var page = {
        init: function () {
            this.onCheckLogin();

        },
        onCheckLogin: function () {
            $.ajax({
                type: "get",
                url: "http://www.homeownership.cn/editUser.action",
                data: {
                    "password": "123456",
                    "phone": "13390517165",
                    id: "1"
                },
                dataType: "json",
                success: function (data) {
                    console.log(data)
                }
            });
        },
        onSubmit: function(){
            $(".submit").on("click",function(){

            })
        }

    };
    page.init();
//})