// shortcut for cookies
if (!chrome.cookies) {
  chrome.cookies = chrome.experimental.cookies;
}

// when we open the chrome extension...
chrome.tabs.query({"status":"complete","windowId":chrome.windows.WINDOW_ID_CURRENT,"active":true}, function(tab){
  console.log(JSON.stringify(tab));
  // chrome.cookies.getAll({"url":tab[0].url}, function(cookies) {
  // get all cookie domains from list
  chrome.cookies.getAll({}, function(cookies) {
    let result = cookies.map(a => a.domain);
    console.log(result)
    new_res = Counter(result);
    console.log(new_res);

    // get the top three domains by number of cookies, convert to string with comma delimiter
    var top_3 = Object.fromEntries(Object
          .entries(new_res)
          .sort(([, a], [, b]) => b - a)
          .filter((s => ([, v]) => s.add(v).size <= 3)(new Set))
      );
    top_3_formatted = Object.keys(top_3).map(s => s.slice(1)).slice(0, 3).join(', ');
  
    // populate total number of cookies
    document.getElementById("number").innerHTML = "$" + cookies.length.toLocaleString();
    // populate top three domains
    document.getElementById("cookies").innerHTML = "top 3: " + top_3_formatted;
  });
});

// replicate Counter() in Python
function Counter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
  }