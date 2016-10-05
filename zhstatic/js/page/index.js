/**
 * Created by DAY on 16/10/2.
 */
//define([
//    "jquery",
//    //"swiper",
//],function($){
var page = {
    init: function () {
        this.onCheckLogin()
    },
    onCheckLogin: function () {
        console.log(1);
        $.ajax({
            type: "get",
            url: "http://www.homeownership.cn/editUser.action",
            dataType: "json",
            data: {
                "password": "123456",
                "phone": "13390517165"
            },
            success: function (data) {
                console.log(data)
            },
            error: function (res) {
                console.log(res)
            }
        });
    }
};
page.init();
//});
