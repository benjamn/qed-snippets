window.location = 'javascript:' +
  '(function(s){' +
    's.setAttribute("type","text/javascript");' +
    's.setAttribute("src","https://raw.github.com/benjamn/qed-snippets/master/enable.js");'+
    'document.documentElement.firstChild.appendChild(s);' +
  '}(document.createElement("script")));';
