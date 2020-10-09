$(document).ready(function () {
  const $timeDiv = $("#time-h1");

  $timeDiv.attr("draggable", "true");

  function clock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    $timeDiv.text(`${hours}:${minutes}:${seconds}`);

    setTimeout(clock, 500);
  }

  // $timeDiv.mousedown(function(e){

  // })

  clock();
});
