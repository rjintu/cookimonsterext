// shortcut for cookies
if (!chrome.cookies) {
  chrome.cookies = chrome.experimental.cookies;
}
chrome.runtime.sendMessage({popupOpen: true});

// when we open the chrome extension...
chrome.tabs.query({"status":"complete","windowId":chrome.windows.WINDOW_ID_CURRENT,"active":true}, function(tab){
  console.log(JSON.stringify(tab));
  // chrome.cookies.getAll({"url":tab[0].url}, function(cookies) {
  chrome.cookies.getAll({}, function(cookies) {
    // var domains = [];
    // all_cookies = "";
    // var counter = 0
    // for (var elem in cookies) {
    //   // var curr = JSON.stringify(cookies[elem]);
    //   // all_cookies = all_cookies + curr;
    //   domains.push(cookies[elem].domain);
    //   counter += 1;
    // }
    let result = cookies.map(a => a.domain);
    console.log(result)
    new_res = Counter(result);
    console.log(new_res);

    var top_3 = Object.fromEntries(Object
          .entries(new_res)
          .sort(([, a], [, b]) => b - a)                         // just to be sure
          .filter((s => ([, v]) => s.add(v).size <= 3)(new Set))
      );
    
    top_3_formatted = Object.keys(top_3).map(s => s.slice(1)).join(', ');
  
    // console.log(Object.keys(new_res).reduce(function(a, b){ return new_res[a] > new_res[b] ? a : b }));
    // localStorage.all_cookies = all_cookies;
    document.getElementById("number").innerHTML = "$" + cookies.length.toLocaleString();
    document.getElementById("cookies").innerHTML = "including: " + top_3_formatted;
  });
});

function Counter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
  }

//document.getElementById("number").innerHTML = "$" + (Math.floor(Math.random() * 100 + 1000)).toLocaleString()