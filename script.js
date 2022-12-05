var today = new Date();
var day = dayjs(today);

console.log(day);

var date = day.$M + "-" + day.$D + "-" + day.$y;
var time = day.$H + ":" + day.$m + ":" + day.$s;
var dateTime = date + " " + time;

document.getElementById("currentDay").innerHTML = dateTime;

var currentHour = today.getHours();

$(function () {
  $(".saveBtn").on("click", function () {
    var hour = $(this).parent().attr("id");
    var textarea = $(this).siblings(".description").val();
    localStorage.setItem(hour, textarea);
    console.log(hour, textarea);
  });

  $(".time-block").each(function () {
    var hour = $(this).attr("id");
    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  $("#9 .description").val(localStorage.getItem("9"));
  $("#10 .description").val(localStorage.getItem("10"));
  $("#11 .description").val(localStorage.getItem("11"));
  $("#12 .description").val(localStorage.getItem("12"));
  $("#13 .description").val(localStorage.getItem("13"));
  $("#14 .description").val(localStorage.getItem("14"));
  $("#15 .description").val(localStorage.getItem("15"));
  $("#16 .description").val(localStorage.getItem("16"));
  $("#17 .description").val(localStorage.getItem("17"));
});
