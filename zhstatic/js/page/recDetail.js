/**
 * Created by DAY on 16/10/3.
 */
//define([
//    "jquery",
//    "wangEditor",
//],function($) {

// 操作示例 附件上传  -  到阿里云
var workObj = {}; // 附件-应用图标

var page = {
    init: function () {
        this.initGetDate()
    },
    initGetDate: function(){
        var data = {
            "rwxq_nr":{
                "city":"杭州",
                "xingzhi":"全职",
                "tittle":"(北京/全职）书社建筑-合伙人、建筑、景观、室内设计师、实习生",
            },
            "rwxq_rwms":"任务描述浙江杭州九树公寓建筑设计招标浙江杭州九树公寓建筑设计招标浙江杭州九树公寓建筑设计招标浙江杭州九树公寓建筑设计招标",
            "rwxq_rwyq":"任务要求浙江杭州九树公寓建筑设计招标浙江杭州九树公寓建筑设计招标浙江杭州九树公寓建浙江杭州九树公寓建筑设计招标浙江杭州九树公寓建筑设计招标筑设计招标",
            "rwxq_bm":"报名的用户头像",
            "rwxq_pinglun":{
                "img":"用户的头像 ",
                "time":"评论时间",
                "content":"评论内容"
            }
        };
        $('.J_taskTitle').text(data.rwxq_nr.tittle);
        $('.J_address').text(data.rwxq_nr.city);
        $('.J_profession').text(data.rwxq_nr.xingzhi);
        $('.J_time').text(data.rwxq_nr.xingzhi);
        $('.J_price').text(data.rwxq_nr.xingzhi);
        $('.J_type').text(data.rwxq_nr.xingzhi);
        $('.J_cycle').text(data.rwxq_nr.xingzhi);
        $('.J_prePayment').text(data.rwxq_nr.xingzhi);
        $('.J_area').text(data.rwxq_nr.xingzhi);
        $('.J_dev').text(data.rwxq_nr.xingzhi);
        $('.J_phone').text(data.rwxq_nr.xingzhi);
        $('.J_mail').text(data.rwxq_nr.xingzhi);

        $('.J_taskInfo').text(data.rwxq_rwms);
        $('.J_taskRequire').text(data.rwxq_rwyq);

        $('.J_file').text(data.rwxq_nr.xingzhi);


        //$.ajax({
        //    type: "get",
        //    url: "http://www.homeownership.cn/editUser.action",
        //    dataType: "json",
        //    data: {
        //        "password": "123456",
        //        "phone": "13390517165",
        //        id: "1"
        //    },
        //    success: function (data) {
        //        console.log(data)
        //    }
        //});
    },
    onCheckLogin: function () {
        $.ajax({
            type: "get",
            url: "http://www.homeownership.cn/editUser.action",
            dataType: "json",
            data: {
                "password": "123456",
                "phone": "13390517165",
                id: "1"
            },
            success: function (data) {
                console.log(data)
            }
        });
    },


};
page.init();
//})