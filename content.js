if (window.location.href === 'https://www.google.com/') {
  chrome.tabs.update({url: 'chrome://newtab'});
}
