const onLoad = () => {
  const player = document.querySelector('.ytd-player');
  const controls = player.querySelector('.ytp-left-controls');
  const muteButton = controls.querySelector('.ytp-mute-button').parentNode;

  const repeatButton = document.createElement('button');
  const repeatSvg = document.createElement('svg');
  const repeatPath = document.createElement('path');
  const repeatUse = document.createElement('use');

  repeatUse.classList.add('ytp-svg-shadow');

  repeatPath.classList.add('ytp-svg-fill');
  repeatPath.setAttribute('d', 'M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z');

  repeatUse.appendChild(repeatPath);

  repeatSvg.setAttribute('height', '100%');
  repeatSvg.setAttribute('width', '100%');
  repeatSvg.setAttribute('version', '1.1');
  repeatSvg.setAttribute('viewBox', '0 0 36 36');
  repeatSvg.appendChild(repeatUse);

  repeatButton.classList.add('ytp-button');
  repeatButton.appendChild(repeatSvg);

  controls.insertBefore(repeatButton, muteButton);
};

window.addEventListener('load', onLoad, false);
