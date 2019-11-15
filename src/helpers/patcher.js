class Patcher {
  constructor() {
    this.button = createButton();
  }

  patch() {
    const player = document.querySelector('.ytd-player');

    const controls = player.querySelector('.ytp-left-controls');
    const tip = this.button.querySelector('.ytp-repeat-button > .tip');

    onElementHeightChange(controls, (element) => {
      const tip = element.querySelector('.ytp-repeat-button > .tip');
      const bottom = controls.clientHeight + 7;

      tip.setAttribute('style', `bottom: ${bottom}px; margin-left: -12px`);
    });

    if (!player) {
      return;
    }

    const muteButton = controls.querySelector('.ytp-mute-button').parentNode;

    this.button.onclick = onRepeatClick;
    this.button.onmouseover = removeTitle;
    this.button.onmouseout = resetTitle;
    tip.setAttribute('style', `bottom: ${controlsPanel.clientHeight + 7}px; margin-left: -12px`);

    controls.insertBefore(this.button, muteButton);
  }

  resetButton() {
    this.button.onclick = null;
    this.button.classList.remove('red');
  }
}
