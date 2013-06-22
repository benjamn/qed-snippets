require.enqueue(function(require) {
  var snippets = require("qed/snippets");
  snippets.addTabTrigger("m", "[math]$1[/math]");
  snippets.addTabTrigger("c", "[code$2]$1[/code]");
  snippets.addTabTrigger("js", "[code ${2:js}]$1[/code]");
});
