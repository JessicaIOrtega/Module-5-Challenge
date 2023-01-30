var today = dayjs();
$('#currentDay').text(today.format('dddd, MMMM D'));

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
  localStorage.setItem($(this).siblings('.description').val())
  var infoLS = JSON.parse(localStorage.getItem(description));
  console.log(infoLS);
}

for (const button of buttonEl) {
  button.addEventListener('click', saveLS);
  renderInfo();
};
