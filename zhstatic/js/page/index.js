/**
 * Created by DAY on 16/10/2.
 */
var page = {
    init: function () {
        this.fixedBar();
        this.initSwiper();
        this.initNavChange();
        common.initModal()
    },

    /**
     * nav滚动控制
     */
    initNavChange: function () {
        $(window).scroll(function (){
            $(".nav-bar").addClass("bgColor");
            $(".logo").addClass("fntColor");
            var scrollTop = $(window).scrollTop();
            // console.log($(".search-box")[0].offsetTop)
            // console.log($(window).scrollTop())
            // console.log($(".search-box")[0].offsetTop - $(window).scrollTop())
            if($(".search-box")[0].offsetTop - $(window).scrollTop() <= 0){
                $(".search-box").addClass("fixed");
            }else{
                $(".search-box").removeClass("fixed");
            }
            if(scrollTop == 0){
                $(".nav-bar").removeClass("bgColor");
                $(".logo").removeClass("fntColor");
            }
        });
    },
    /**
     * 轮播控制
     */
    initSwiper: function () {
        /*banner轮播*/
        var mySwiper = new Swiper('.banner-container', {
            autoplay: 2000, //可选选项，自动滑动
            loop:true,
            autoplayDisableOnInteraction:false
        });
        mySwiper.onResize();
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
    },
    /**
     * 悬浮导航
     */
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
    },
};
page.init();
