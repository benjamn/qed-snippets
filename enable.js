require.enqueue(function(require) {
  var snippets = require("qed/snippets");
  snippets.addTabTrigger("m", "[math]$1[/math]");
  snippets.addTabTrigger("c", "[code]$1[/code]");
  snippets.addTabTrigger("j", "[code ${2:js}]$1[/code]");
  snippets.addTabTrigger("h", "[code ${2:html}]$1[/code]");
});
