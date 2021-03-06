// shortcut for cookies
if (!chrome.cookies) {
  chrome.cookies = chrome.experimental.cookies;
}

// when we open the chrome extension...
chrome.tabs.query({"status":"complete","windowId":chrome.windows.WINDOW_ID_CURRENT,"active":true}, function(tab){
  // console.log(JSON.stringify(tab));
  // chrome.cookies.getAll({"url":tab[0].url}, function(cookies) {
  // get all cookie domains from list
  chrome.cookies.getAll({}, function(cookies) {
    let result = cookies.map(a => (((a.domain.match(/\./g) || []).length) >= 2 ? a.domain.split('.').slice(-2).join('.') : a.domain)); // preprocessing to remove the beginning '.' in domains
    new_res = Counter(result);

    // get the top three domains by number of cookies, convert to string with comma delimiter
    var top_3 = Object.fromEntries(Object
          .entries(new_res)
          .sort(([, a], [, b]) => b - a)
          .filter((s => ([, v]) => s.add(v).size <= 3)(new Set))
      );
    top_3_formatted = Object.keys(top_3).slice(0, 3).join(', '); // get top 3
  
    // populate total number of cookies
    document.getElementById("list-cookies").innerHTML = cookies.length.toLocaleString();
    // populate top three domains
    document.getElementById("cookies").innerHTML = "top culprits: " + top_3_formatted;
  });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('list-cookies').addEventListener('click', function() {
        chrome.tabs.create({ url: 'chrome://settings/content/all' });
    });
});

// replicate Counter() in Python
function Counter(array) {
    var count = {};
    array.forEach(val => count[val] = (count[val] || 0) + 1);
    return count;
  }