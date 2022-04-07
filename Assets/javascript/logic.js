// display date at the top of the screen in the jumbotron
var currentTime = moment().format("MMM Do, dddd, YYYY hh:mm");
$("#currentDay").text(currentTime);
var currentHour = moment().format("H");

for (var i = 0; i < $(".time-block").length; i++) {
    if (currentHour < $(".hour".value)) {
        $(".time-block").addClass("past");
    }
    else if (currentHour > $(".hour".value)) {
        $(".time-block").addClass("future");
    }
    else (currentHour = (".hour".value)) ;{
        $(".time-block").addClass("present");
    }
}

$("saveBtn").click(function() {
       localStorage.setItem($("description")).JSON.stringify($("description"));
});

