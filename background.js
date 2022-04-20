// https://developer.chrome.com/docs/extensions/mv3/getstarted/

let color = '#3aa757';
console.log('Got this far');

// chrome.cookies.onChanged.addListener(function(info) {
//   console.log("onChanged" + JSON.stringify(info));
// });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.cookies.getAll({
    }, function (theCookies) {
        cookies = theCookies
        console.log(JSON.stringify(cookies));
    });
  console.log('page updated');
});

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });
