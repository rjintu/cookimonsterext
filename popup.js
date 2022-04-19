// shortcut for cookies
if (!chrome.cookies) {
  chrome.cookies = chrome.experimental.cookies;
}

// Initialize button with users's preferred color
let listCookies = document.getElementById("listCookies");


  // listCookies.style.backgroundColor = color;
//   console.log(chrome.cookies)
// });

// When the button is clicked, inject setPageBackgroundColor into current page
listCookies.addEventListener("click", async () => {
  console.log("clicked");
  chrome.tabs.query({"status":"complete","windowId":chrome.windows.WINDOW_ID_CURRENT,"active":true}, function(tab){
    console.log(JSON.stringify(tab));
    chrome.cookies.getAll({"url":tab[0].url}, function(cookies) {
      console.log(cookies.length);
      all_cookies = "";
      for (var elem in cookies) {
        var curr = JSON.stringify(cookies[elem]);
        console.log(curr);
        all_cookies = all_cookies + curr;
    }
    localStorage.all_cookies = all_cookies;
    console.log("showed cookies");
  });
});

  // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   function: setPageBackgroundColor,
  // });
});

// The body of this function will be execuetd as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
