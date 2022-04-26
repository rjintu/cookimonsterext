// https://developer.chrome.com/docs/extensions/mv3/getstarted/


chrome.cookies.getAll({domain: ".mydomain.com"}, function(cookies) {
    for(var i=0; i<cookies.length;i++) {
      console.log(cookies[i]);

      chrome.cookies.remove({url: "https://" + cookies[i].domain  + cookies[i].path, name: cookies[i].name});
    }
  });
