chrome.browserAction.onClicked.addListener(function(tab) {
    alert('working?');
    chrome.tabs.executeScript(null, {file: "reveal.js"});
});
