class Patcher {
  constructor() {
    this.button = createButton();
  }

  patch() {
    const player = document.querySelector('.ytd-player');

    if (!player) {
      return; 
    }

    const controls = player.querySelector('.ytp-left-controls');
    const muteButton = controls.querySelector('.ytp-mute-button').parentNode;

    this.button.onclick = onRepeatClick;

    controls.insertBefore(this.button, muteButton);
  }

  resetButton() {
    this.button.onclick = null;
    this.button.classList.remove('red');
  }
}
