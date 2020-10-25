let player;

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "315",
    width: "560",
    videoId: "N-OYsfDUtZQ",
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(e) {
  e.target.playVideo();
}

$(document).ready(function () {
  const $timeDiv = $("#time-h1");
  const $videoButton = $("#play-video");
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

  // $videoButton.click(function (e) {
  //   e.preventDefault();
  //   if (!videoPlaying) {
  //     $rainVideo.attr(
  //       "src",
  //       "https://www.youtube.com/embed/SDmbGrQqWog?autoplay=1&loop=1"
  //     );
  //     videoPlaying = true;
  //   } else {
  //     $rainVideo.attr("src", "https://www.youtube.com/embed/SDmbGrQqWog");
  //     videoPlaying = false;
  //   }
  // });

  clock();
});
