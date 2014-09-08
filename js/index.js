'use strict';

function readContent(filename, urlSuffix, isAddHistory) {
  if (isAddHistory == undefined) {
    isAddHistory = true;
  }
  var httpReq = new XMLHttpRequest();
  httpReq.open('GET', filename, true);
  httpReq.onreadystatechange = function() {
    if (httpReq.readyState == 4) {
      document.getElementById('main-area').innerHTML = httpReq.responseText;
      if (isAddHistory) {
        var state = {
          filename: filename,
          urlSuffix: urlSuffix
        };
        history.pushState(state, null, urlSuffix);
      }
    }
  }
  httpReq.send(null);
}

window.addEventListener('popstate', function(e) {
  readContent(history.state.filename, history.state.urlSuffix, false);
}, false);
