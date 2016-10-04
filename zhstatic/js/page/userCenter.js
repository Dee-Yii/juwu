/**
 * Created by DAY on 16/10/3.
 */

    var page = {
        init: function() {
            this.onCheckLogin()
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
        }
    };
    page.init();
