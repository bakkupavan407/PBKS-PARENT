$(document).ready(function () {
    //$.ajax({
    //    type: "POST",
    //    url: "../Services/UserManagement.asmx/HelloWorld",
    //    contentType: "application/json; charset=utf-8",
    //    dataType: "json",
    //    success: OnSuccess,
    //    failure: function (response) {
    //        alert("Something went wrong. Please try again later.");
    //    }
    //});

    //function OnSuccess(response) {
    //    console.log(response);
    //}
    /*$("#commentForm").validate();
    $("#login-form").validate({
    messages: {
    loginEmail: {
    required: 'Enter this!'
    }
    }
    });*/
    $.fn.serializeObject = function () {
        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[this.name] !== undefined) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
    $(document).on('click', '#login-button', function (e) {
        e.preventDefault();
        var name = document.getElementById("loginId").value;
        var pass = document.getElementById("loginPassword").value;

        console.log(name);
        console.log(pass);

        data = { username: name, password: pass };
        var jsonOfLog = JSON.stringify(data);

        console.log("jsonOfLog=" + jsonOfLog);

        makePostAjax("Register/loginUser", jsonOfLog, "loginSuccess");
        function loginSuccess(response) {
            console.log(response);
        }

        //        $.ajax({
        //            type: 'POST',
        //            dataType: 'text',
        //            url: "Register/loginUser",
        //            data: "jsonOfLog=" + jsonOfLog,
        //            success: function (mydata) {
        //                var respobj = JSON.parse(mydata);
        //                console.log(respobj);
        //                if (respobj.status === "success") {
        //                    window.location.href = "../views/dataentry.aspx";
        //                }
        //            },
        //            error: function (xhr, ajaxOptions, thrownError) {
        //                console.log("request failed");
        //            },

        //            processData: false,
        //            async: false
        //        });

        //var regData = JSON.stringify($('.registration-form').serializeObject());//$(".registration-form").serializeArray();

        //        var userId = document.getElementById("loginId").value;
        //        var pwd = document.getElementById("loginPassword").value;

        //        var finalObj = { 'userid': userId, 'password': pwd };

        //        var data = {
        //            username: userId,
        //            password: pwd
        //        };
        //        console.log("_____", JSON.stringify(data));

        //        var finalDataObj = {
        //            "logindata": JSON.stringify(data)
        //        };


        //        console.log("******", finalDataObj);

        //        try {
        //            makePostAjax("Register/loginUser", finalDataObj, "registrationSuccess");
        //        }
        //        catch (e) {
        //            e.description;
        //        }

        //        $("#login-form").validate({
        //            messages: {
        //                loginEmail: {
        //                    required: 'Enter this!'
        //                }
        //            }
        //        });
    });
    $(document).on('click', '#registration-button', function () {

        var my_data = $('.registration-form').serializeObject();
        console.log(my_data);

        var final_ddd = JSON.stringify(my_data);
        console.log(final_ddd);

        var getReportColumnsParams = {
            "usersJson": final_ddd
        };

        console.log(getReportColumnsParams);
        try {
            makePostAjax("/Dataentry/SaveUser", $('.registration-form').serialize(), "registrationSuccess");
        }
        catch (e) {
            e.description;
        }
    });
    function registrationSuccess(response) {
        console.log(response);
    }
    $('.registration-form').hide();
    $(document).on('click', 'a[title = "registerLink"]', function (e) {
        e.stopPropagation();
        $('.registration-form,.login-form').toggle();
    });
});

//function loginUser() {
//    window.location.href = "../views/settings.aspx";
//}