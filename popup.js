// shortcut for cookies
if (!chrome.cookies) {
  chrome.cookies = chrome.experimental.cookies;
}

let listCookies = document.getElementById("listCookies");

// When the button is clicked, inject setPageBackgroundColor into current page
listCookies.addEventListener("click", async () => {
  console.log("clicked");
  chrome.cookies.getAll({
    }, function (theCookies) {
        cookies = theCookies
        console.log(JSON.stringify(cookies));
        //console.log(cookies)
    });
  console.log("post click prints");

  // chrome.tabs.query({"status":"complete","windowId":chrome.windows.WINDOW_ID_CURRENT,"active":true}, function(tab){
  //   console.log(JSON.stringify(tab));
  //   chrome.cookies.getAll({"url":tab[0].url}, function(cookies) {
  //     all_cookies = "";
  //     for (var elem in cookies) {
  //       var curr = JSON.stringify(cookies[elem]);
  //       console.log(curr);
  //       all_cookies = all_cookies + curr;
  //   }
  //   localStorage.all_cookies = all_cookies;
  //   console.log("showed cookies");
  // });
// });
});

// // from get cookies extension
// function reloadCookies() {
//     $("tbody")
//         .html("");
//     chrome.tabs.getSelected(null, function(e) {
//         chrome.cookies.getAll({
//             url: e.url
//         }, function(t) {
//             $(t)
//                 .each(function(t, n) {
//                     console.log(n.domain + " " + n.url + " " + n.name + " " + n.value);
//                     //addItem(n, e.url)
//                 })
//         })
//     })
// };

  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   function: setPageBackgroundColor,
  // });
// });

// The body of this function will be execuetd as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
