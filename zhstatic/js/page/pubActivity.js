/**
 * Created by DAY on 16/10/3.
 */
define([
    "jquery",
    //"swiper",
],function($){
    var page = {
        init: function() {
            this.onCheckLogin();
            this.onViewCost();
        },
        onCheckLogin: function () {
            $.ajax({
                type: "get",
                url: "http://www.homeownership.cn/editUser.action",
                data: {
                    "password":"123456",
                    "phone":"13390517165",
                    id:"1"
                },
                dataType: "json",
                success: function(data){
                    console.log(data)
                }
            });
        },
        onViewCost: function() {
            $(".J_viewCost").on("click", function() {
                $("#costModal").fadeIn();
            });
            $(".modal-close").on("click", function(){
                $("#costModal").fadeOut();
            })
        }
    };
    page.init();
});
