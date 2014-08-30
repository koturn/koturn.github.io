'use strict';

function readContent(filename) {
  var httpReq = new XMLHttpRequest();
  httpReq.open('GET', filename, true);
  httpReq.onreadystatechange = function() {
    if (httpReq.readyState == 4) {
      document.getElementById('main-area').innerHTML = httpReq.responseText;
    }
  }
  httpReq.send(null);
}
