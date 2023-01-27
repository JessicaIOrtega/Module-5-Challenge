var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var buttonEl = document.getElementsByClassName('saveBtn');
var rows = document.getElementsByClassName("row");
var currentTime = dayjs().hour();


$(document).ready(function () {

  $(".time-block").each(function () {
    let time = $(this).attr('id')
    if (currentTime == time) {
      $(this).addClass("present")

    } else if (currentTime < time) {
      $(this).addClass("future")

    } else if (currentTime > time) {
      $(this).addClass("past")
    }
  });

});


function saveLS() {
  var rowId = $(this).parent().attr('id');
  var description = $(this).siblings('.description').val();
  localStorage.setItem(rowId, description);

};


var description = $(this).siblings('.description').val();
var rowId = $(this).parent().attr('id');


//how to make it work???
function renderInfo() {
  var infoLS = localStorage.getItem(description);
  description.textContent = infoLS;
}

for (const button of buttonEl) {
  button.addEventListener('click', saveLS);
  renderInfo();
};








  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?