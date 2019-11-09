const onRepeatClick = (event) => {
  const { target, view } = event;

  const videoPlayer = view.document.querySelector('video.video-stream');
  videoPlayer.loop = !videoPlayer.loop;
  
  target.classList.toggle('red');
};
