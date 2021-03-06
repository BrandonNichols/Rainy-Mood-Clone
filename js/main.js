let player;

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "315",
    width: "560",
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady() {
  player.loadVideoById("N-OYsfDUtZQ", 8);
}

$(document).ready(function () {
  const $timeDiv = $("#time-h1");
  const $playVideo = $("#play-video");
  const $pauseVideo = $("#pause-video");
  const $rainVideo = $("#rain-video");
  let videoPlaying = false;

  const clockState = {
    offSetX: 0,
    offSetY: 0,
    isDragging: false
  };

  $timeDiv.attr("draggable", "true");
  $timeDiv.css("position", "absolute");

  function clock() {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    if (hours < 10) {
      hours = `0${hours}`;
    }

    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    if (seconds < 10) {
      seconds = `0${seconds}`;
    }

    $timeDiv.text(`${hours}:${minutes}:${seconds}`);

    setTimeout(clock, 500);
  }

  $timeDiv.mousedown(function (e) {
    clockState.offSetX = e.clientX - $(this).offset().left;
    clockState.offSetY = e.clientY - $(this).offset().top;
    clockState.isDragging = true;
  });

  $timeDiv.mousemove(function (e) {
    if (clockState.isDragging) {
      $timeDiv.css("left", e.clientX - clockState.offSetX);
      $timeDiv.css("top", e.clientY - clockState.offSetY);
    }
  });

  $timeDiv.mouseup(function () {
    clockState.isDragging = false;
  });

  $playVideo.click(function (e) {
    e.preventDefault();
    // if (!videoPlaying) {
    player.playVideo();
    $pauseVideo.removeClass("hide-button");
    $playVideo.addClass("hide-button");
    // videoPlaying = true;
    // } else {
    //   player.pauseVideo();
    //   videoPlaying = false;
    // }
  });

  $pauseVideo.click(function (e) {
    e.preventDefault();
    player.pauseVideo();
    $playVideo.removeClass("hide-button");
    $pauseVideo.addClass("hide-button");
  });

  clock();
});
