// https://developer.chrome.com/docs/extensions/mv3/getstarted/

let color = '#3aa757';
console.log('Got this far');

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});
