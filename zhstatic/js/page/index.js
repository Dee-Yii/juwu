/**
 * Created by DAY on 16/10/2.
 */
//define([
//    "jquery",
//    //"swiper",
//],function($){
var page = {
    init: function () {
        /*banner轮播*/
        var mySwiper = new Swiper('.banner-container', {
            autoplay: 2000, //可选选项，自动滑动
            loop:true
        });
        /*banner轮播*/
        /*设计师*/
        var peopleSwiper = new Swiper(".people-container",{
            autoplay:2000,
            loop:true,
            slidesPerView:7,
            slidesPerGroup:1,
            autoplayDisableOnInteraction:false,
            spaceBetween:30,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next'
        });
        $(window).scroll(function (){
            $(".nav-bar").addClass("bgColor");
            $(".logo").addClass("fntColor");
            var scrollTop = $(window).scrollTop();
            if(scrollTop >= 600){
                $(".search-box").addClass("fixed");
            }else{
                $(".search-box").removeClass("fixed");
            }
            if(scrollTop == 0){
                $(".nav-bar").removeClass("bgColor");
                $(".logo").removeClass("fntColor");
            }
        });
        /*设计师*/
        this.onCheckLogin();
        /*左侧悬浮框*/
        this.fixedBar();
    },
    onLogin: function () {
        $(".J_login").on("click", function(){
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
        });
    },
    onCheckLogin: function () {
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
        $(".logined").hover(function (){
            $(".person-center").show();
        },function (){
            $(".person-center").hide();
        })
    },
    fixedBar:function (){
        /*回到顶部*/
        $(".to-top").on("click",function (){
            goTop(0);
        });
        /*绿建和装配*/
        $(".build-green").on("click",function (){
            var top = $(".assemble-box").offset().top-71;
            goTop(top);
        });  
        function goTop(top) {
            $(document.documentElement).animate({scrollTop:top},400);//for Firefox&IE
            $("body").animate({scrollTop:top},400);//for Chrome
        }
    }
};
page.init();
//});
