
function pubComment (url,cb){
    var btn = $(".submit");
    var text = $(".J_comment").val().trim();

    var data = {
        userid: "1",
        text: text
    };

    btn.on("click",function(){
        $.ajax({
            type: "post",
            url: url,
            dataType: "json",
            data: data,
            success: function (data) {
                console.log(data);
                cb()
            },
            error: function (res) {
                console.log(res)
            }
        })
    })
}