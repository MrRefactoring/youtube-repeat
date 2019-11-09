const createButton = () => {
  const button = document.createElement('button');

  button.classList.add('ytp-button');
  button.classList.add('ytp-repeat-button');
  button.setAttribute('title', 'Repeat');
  button.setAttribute('area-label', 'Repeat');

  button.innerHTML = `
    <svg height="100%" version="1.1" viewBox="0 0 36 36" width="100%">
      <use class="ytp-svg-shadow" xlink:href="#ytp-id-144121"></use>
      <path class="ytp-svg-fill"
      d="M13,13 h10 v3 l4,-4 l-4,-4 v3 H11 v6 h2 V13 zm10,10 H13 v-3 l-4,4 l4,4 v-3 h12 v-6 h-2 v4 zm-4,-2 V15 h-1 l-2,1 v1 h1.5 v4 H19 z"
      id="ytp-id-144121"></path>
    </svg>
  `;

  return button;
};

let video;
let repeatButton;
let repeat = false;

const onClick = () => {
  repeat = !repeat;

  video.loop = repeat;

  repeatButton.classList.toggle('red');
};

const onLoad = () => {
  video = document.querySelector('video.video-stream');
  const player = document.querySelector('.ytd-player');

  if (!player) {
    return;
  }

  const controls = player.querySelector('.ytp-left-controls');
  const muteButton = controls.querySelector('.ytp-mute-button').parentNode;

  repeatButton = createButton();

  repeatButton.addEventListener('click', onClick);

  controls.insertBefore(repeatButton, muteButton);
};

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    console.log(request, sender, sendResponse);
  }
);

onLoad();
