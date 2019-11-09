const patcher = new Patcher();

const messageReceived = (message, sender, sendResponse) => {
  const { command } = message;

  switch (command) {
    case 'patch':
      patcher.patch();
  }
};

chrome.runtime.onMessage.addListener(messageReceived);
