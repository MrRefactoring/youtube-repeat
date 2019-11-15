const onElementHeightChange = (elm, callback) => {
  let lastHeight = elm.clientHeight, newHeight;
  (function run() {
    newHeight = elm.clientHeight;
    if (lastHeight != newHeight)
      callback(elm);
    lastHeight = newHeight;

    if (elm.onElementHeightChangeTimer)
      clearTimeout(elm.onElementHeightChangeTimer);

    elm.onElementHeightChangeTimer = setTimeout(run, 200);
  })();
}