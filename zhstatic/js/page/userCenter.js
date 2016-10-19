/**
 * Created by DAY on 16/10/3.
 */

    var page = {
        init: function() {
            this.onCheckLogin();
            this.onChangeType();
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
            /*左侧悬浮框*/
            $(".logined").hover(function (){
                $(".person-center").show();
            },function (){
                $(".person-center").hide();
            })
        },
        onChangeType: function () {
            var btn = $(".J_type");
            var urlArr = [
                "http://www.homeownership.cn/zd/work_publish.action",
                "http://www.homeownership.cn/zd/article_publish.action",
                "http://www.homeownership.cn/zd/activity_publish.action",
                "http://www.homeownership.cn/zd/task_publish.action",
                "http://www.homeownership.cn/zd/recruitment_publish.action",
                //"http://www.homeownership.cn/zd/task.action",
            ]
            btn.on("click", function () {
                var $this = $(this);
                var txt = $this.find(".type").text();
                var index = $this.index();
                $this.addClass("active").siblings().removeClass("active");
                $(".J_pubLink").text("发布" + txt).attr("href",urlArr[index]);

            })
        }
    };
    page.init();
