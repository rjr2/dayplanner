//Variables for color changing
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

//Current date in header
document.getElementById("currentDay").innerHTML = moment().format("MMMM Do YYYY");

//pulling todo list from storage
$("#todo9").val(localStorage.todo9);
$("#todo10").val(localStorage.todo10);
$("#todo11").val(localStorage.todo11);
$("#todo12").val(localStorage.todo12);
$("#todo13").val(localStorage.todo13);
$("#todo14").val(localStorage.todo14);
$("#todo15").val(localStorage.todo15);
$("#todo16").val(localStorage.todo16);
$("#todo17").val(localStorage.todo17);

//event listeners to save todo list to storage
$('#save9').on('click', function(){
    localStorage.todo9 = $('#todo9').val()
})

$('#save10').on('click', function(){
    localStorage.todo10 = $('#todo10').val()
})

$('#save11').on('click', function(){
    localStorage.todo11 = $('#todo11').val()
})

$('#save12').on('click', function(){
    localStorage.todo12 = $('#todo12').val()
})

$('#save13').on('click', function(){
    localStorage.todo13 = $('#todo13').val()
})

$('#save14').on('click', function(){
    localStorage.todo14 = $('#todo14').val()
})

$('#save15').on('click', function(){
    localStorage.todo15 = $('#todo15').val()
})

$('#save16').on('click', function(){
    localStorage.todo16 = $('#todo16').val()
})
$('#save17').on('click', function(){
    localStorage.todo17 = $('#todo17').val()
})

Array.from(rows).forEach(row => {
    let
      rowIdString = row.id,
      rowHour;
    if (rowIdString) {
      rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
      if (currentHour === rowHour) {
        setColor(row, "red");
      } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
        setColor(row, "green");
      } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
        setColor(row, "lightgrey");
      } else {
        setColor(row, "white");
      }
    }
  });
  
  function setColor(element, color) {
    element.style.backgroundColor = color;
  }