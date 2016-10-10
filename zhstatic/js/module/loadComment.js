function loadComment(id, url, start, pagesize) {
    var data = {
        id: id,
        text: text,
        start: start,
        pagesize: pagesize
    };

    $.ajax({
        type: "post",
        url: url,
        dataType: "json",
        data: data,
        success: function (data) {
            console.log(data);
        },
        error: function (res) {
            console.log(res)
        }
    })
}