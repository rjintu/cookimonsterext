// https://developer.chrome.com/docs/extensions/mv3/getstarted/

let color = '#3aa757';

// chrome.cookies.onChanged.addListener(function(info) {
//   console.log("onChanged" + JSON.stringify(info));
// });

let unique_domains; 


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.cookies.getAll({
    }, function (theCookies) {
        var domains = [];
        cookies = theCookies;
        var counter = 0;
        console.log(cookies.length);
        for (var i in cookies) { // iterates through the indices!! not a for each loop
          // console.log(cookies[i]);
          // console.log(cookies[i].domain);
          domains.push(cookies[i].domain);
          counter += 1;
        }
        // console.log(counter);
        unique_domains = [...new Set(domains)];
        // console.log(domains)
        // console.log(unique_domains) 
        // document.getElementById("number").innerHTML = "$" + unique_domains; 
    });
  console.log('page updated');
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if(message.popupOpen) { 
    console.log("popup open")
  }
});