/**
 * Created by DAY on 16/10/3.
 */
//define([
//    "jquery",
//    //"swiper",
//],function($){
    var avatarObj = {};
    var page = {
        init: function() {
            //this.onCheckLogin();
            this.uploadImg();
            this.onViewCost();
            this.onSubmit();
        },

        uploadImg: function () {
            attachUpload('avatar-attach-container', 'avatar-add-attach-button', 'avatar-attach-button-wrapper', 1, avatarObj);
        },
        onViewCost: function() {
            $(".J_viewCost").on("click", function() {
                $("#costModal").fadeIn();
            });
            //$(".modal-close").on("click", function(){
            //    $("#costModal").fadeOut();
            //})
        },
        onSubmit: function(){
            $(".submit").on("click", function () {
                $.ajax({
                    type: "post",
                    url: "http://www.homeownership.cn//activity/createActivity.action",
                    data: {
                        teamId: "123456",
                        subject: $("#title").val().trim(),
                        logoUrl: "1",
                        country: "1",
                        province: "1",
                        city: "1",
                        address: $("#address").val().trim(),
                        contactPhone: $("#phone").val().trim(),
                        mainSpeeker: $("#speaker").val().trim(),
                        mainSpeekerLogo: "1",
                        qaPhone: "1",
                        descMainSpeeker: "1",
                        speekAbstract: "1",
                        speekContent: "1",
                        subSpeekerA: "1",
                        sponsorB: "1",
                        sponsorC: "1",
                        others: "1",
                        startTime: $("#timeStart").val().trim(),
                        endTime: $("#timeEnd").val().trim(),
                        attendScore: "1"
                    },
                    dataType: "json",
                    success: function(data){
                        console.log(data)
                    },
                    error: function(data){
                        alert("错误" + data.code + ":"+data.err )
                    }
                });
            });
        }
    };
    page.init();
//});
