
// You can use either a string for the player ID (i.e., `player`),
// or `document.querySelector()` for any selector
var player = new MediaElementPlayer('player', {
  pluginPath: "/path/to/shims/",
  alwaysShowControls: "true",
// When using `MediaElementPlayer`, an `instance` argument
// is available in the `success` callback
  success: function(mediaElement, originalNode, instance) {

  }
});

const span = document.getElementById("transcript").getElementsByTagName("span");
const video = document.getElementsByTagName("video")[0];

video.addEventListener("timeupdate", () => {
for (let i = 0; i < span.length; i++) {
  let startTime = span[i].getAttribute("data-startTime");
  let endTime = span[i].getAttribute("data-endTime");
  let videoTime = video.currentTime;
    if (videoTime >= startTime && videoTime <= endTime) {
      span[i].classList.add("highlight");
    } else {
      span[i].classList.remove("highlight");
    }
  }
});


for (let i = 0; i < span.length; i++) {
  span[i].addEventListener('click', () => {
    video.currentTime = event.target.getAttribute("data-startTime");
  });
  span[i].addEventListener('mouseover', () => {
    span[i].classList.add("mouseover");
  });
  span[i].addEventListener('mouseout', () => {
    span[i].classList.remove("mouseover");
  });
}
