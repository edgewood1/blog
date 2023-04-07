<h2> Combinators </h2>

<hr>

<h3> Children </h3>

**p > a**   

- only the direct children of ALL `<p>` tags are affected.  

- Below, only "one" and "two" are direct children.  "Three" is not direct because `<hr>` gets in the way. 

**p a**   

- ALL (including deeply nested) children of ALL `<p>` tags are affected: one, two, and three.

```css
<p> <a>one</a> <a>two</a> <hr> <a>three</a> </p>
```



<h3>Siblings</h3>

section + p ... only the p sibling that occurs right after (adjacent) section (both must be siblings) 

section ~ p ... general sibling

3. combination

section, p .. applies one rule to multiple classes: an "and" ~

<style>
section > p {
  background-color: yellow;
}
</style>
</head>
<body>

<div>
<a>
<section>
  <p>Paragraph 1 in the div.</p>
  <p>Paragraph 2 in the div.</p>
  <section><p>Paragraph 3 in the div.</p></section>

  </section>
  </a>
</div>

<p>Paragraph 4. Not in a div.</p>
<p>Paragraph 5. Not in a div.</p>

 