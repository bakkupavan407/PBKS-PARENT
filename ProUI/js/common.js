var makeGetAjax = function (url, successCallback) {
    $.ajax({
        type: "GET",
        url: url,
        success: successCallback,
        error: function (response) {
            console.log("Something went wrong. Please try again later." + response);
        }
    })
}

var makePostAjax = function (url, data, successCallback) {
    var finaldata = "jsonOfLog=" + data;

    console.log(finaldata);

    $.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        data: finaldata,
        success: successCallback,
        error: function (response) {
            console.log("Something went wrong. Please try again later." + response);
        }
    })
}

