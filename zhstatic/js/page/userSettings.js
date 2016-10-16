/**
 * Created by DAY on 16/10/3.
 */

    var page = {
        init: function() {
            this.onCheckLogin();
            this.correctPwd();
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
        correctPwd:function (){
            /*修改密码*/
            $(".heade>a").on("click",function (){
                if($(this).hasClass("login-out-btn")){
                    return false;
                }else{
                    var index = $(this).index();
                    $(this).addClass("bg").siblings("a").removeClass("bg");
                    $(".tabs").eq(index).show().siblings(".tabs").hide();
                }
            });
        }
    };
    page.init();
