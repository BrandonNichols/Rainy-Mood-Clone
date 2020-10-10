$(document).ready(function () {
  const $timeDiv = $("#time-h1");
  const clockState = {
    x: 0,
    y: 0,
    isDragging: false
  };

  $timeDiv.attr("draggable", "true");
  $timeDiv.css("position", "absolute");

  function clock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    $timeDiv.text(`${hours}:${minutes}:${seconds}`);

    setTimeout(clock, 500);
  }

  $timeDiv.mousedown(function (e) {
    console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
    clockState.x = e.clientX;
    clockState.y = e.clientY;
    clockState.isDragging = true;
  });

  $("body").mouseup(function (e) {
    console.log(`isDragging: ${clockState.isDragging}`);
    if (clockState.isDragging) {
      $timeDiv.css("left", e.clientX);
      $timeDiv.css("top", e.clientY);
    }

    clockState.isDragging = false;
  });

  clock();
});
