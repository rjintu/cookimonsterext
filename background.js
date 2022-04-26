// https://developer.chrome.com/docs/extensions/mv3/getstarted/

let color = '#3aa757';

// chrome.cookies.onChanged.addListener(function(info) {
//   console.log("onChanged" + JSON.stringify(info));
// });

let unique_domains; 


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  // document.getElementById("number").innerHTML = Math.floor(Math.random(10) * 10)
  let test_var = Math.floor(Math.random(10) * 10)

  chrome.runtime.sendMessage({greeting: test_var}, function(response) {
    console.log(response.farewell);
});
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

chrome.cookies.getAll({domain: ".mydomain.com"}, function(cookies) {
    for(var i=0; i<cookies.length;i++) {
      console.log(cookies[i]);

      chrome.cookies.remove({url: "https://" + cookies[i].domain  + cookies[i].path, name: cookies[i].name});
    }
  });

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
  if(message.popupOpen) { 
    console.log("popup open")
  }
});