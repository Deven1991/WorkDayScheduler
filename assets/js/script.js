$(document).ready(function () {
    var Today = moment().format("dddd, MMMM Do, YYYY");
    $("#isToday").text(Today);

    $("saveBtn").on("click", function () {
        var inputText = $(this).siblings(".schedule").val();
        var timeStamp = $(this).parent().attr("id");

        //saves items in local storage
        localStorage.listItem(inputText, timeStamp);
    })

    $("#hour9 .schedule").val(localStorage.getItem("hour9"));
    $("#hour10 .schedule").val(localStorage.getItem("hour10"));
    $("#hour11 .schedule").val(localStorage.getItem("hour11"));
    $("#hour12 .schedule").val(localStorage.getItem("hour12"));
    $("#hour13 .schedule").val(localStorage.getItem("hour13"));
    $("#hour14 .schedule").val(localStorage.getItem("hour14"));
    $("#hour15 .schedule").val(localStorage.getItem("hour15"));
    $("#hour16 .schedule").val(localStorage.getItem("hour16"));
    $("#hour17 .schedule").val(localStorage.getItem("hour17"));

    function currentHours() {
        //get current number of hours.
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);

            //confirms current time class for past, present or future
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    currentHours();
})