chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status === "loading" && tab.url === "https://www.google.com/") {
      chrome.tabs.update(tabId, { url: "https://app.eatself.com/admin-login" });
    }
  });
  