require.enqueue(function(require) {
  var snippets = require("qed/snippets");

  // Simplest example: m + tab + x + tab = [math]x[/math].
  snippets.addTabTrigger("m", "[math]$1[/math]");

  // Inline and multi-line code blocks.
  snippets.addTabTrigger("c", "[code]$1[/code]");
  snippets.addTabTrigger("code", "[code]<br/>$1<br/>[/code]<br/>");

  // Same thing except with [code js] filled in by default.
  snippets.addTabTrigger("j", "[code ${2:js}]$1[/code]");
  snippets.addTabTrigger("js", "[code ${2:js}]<br/>$1<br/>[/code]<br/>");

  // Same thing except with [code html] filled in by default.
  snippets.addTabTrigger("h", "[code ${2:html}]$1[/code]");
  snippets.addTabTrigger("html", "[code ${2:html}]<br/>$1<br/>[/code]<br/>");
});
