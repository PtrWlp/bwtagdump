// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//   if (changeInfo.status == 'complete' && tab.active) {
//     chrome.tabs.executeScript(tabId, {file: "tagView.js"});
//   }
// })

var active = (localStorage.tagdumpActive && localStorage.tagdumpActive === "yes");

function updateIcon() {
  if (active) {
    localStorage.tagdumpActive="yes";
    chrome.browserAction.setIcon({path:"tagView.png"});
    chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
      if (changeInfo.status == 'complete' && tab.active) {
        chrome.tabs.executeScript(tabId, {file: "tagView.js"});
      }
    })
  } else {
    localStorage.tagdumpActive="no";
    chrome.browserAction.setIcon({path:"tagViewDisabled.png"});
    chrome.tabs.executeScript(0, {file: "disableTagView.js"});
  }
}

function toggleActive() {
  active = !active;
  updateIcon();
}

chrome.browserAction.onClicked.addListener(toggleActive);
updateIcon();