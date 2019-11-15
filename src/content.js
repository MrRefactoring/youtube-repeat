const messageReceived = (message, sender, sendResponse) => {
  const { command } = message;

  switch (command) {
    case 'patch':
      new Patcher().patch();
  }
};

chrome.runtime.onMessage.addListener(messageReceived);
