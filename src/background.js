const handleUpdate = (tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      command: 'patch'
    });
  }

  if (changeInfo.status === 'complete') {
    chrome.tabs.sendMessage(tabId, {
      command: 'patch'
    });
  }
};

chrome.tabs.onUpdated.addListener(handleUpdate);
