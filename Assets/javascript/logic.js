var sBtn = document.getElementById("saveBtn");
// display date at the top of the screen in the jumbotron
var currentTime = moment().format("MMM Do, dddd, YYYY");
$("#currentDay").text(currentTime);
// change color of timeblocks by whether it is past (grey), present(red), future(green)

// save data to local storage when save button is pressed
$("saveBtn").click(function() {
       localStorage.setItem($("description")).JSON.stringify($("description"));
    }
);





    //var email = document.querySelector("#email").value