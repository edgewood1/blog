attribute selectors

/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"] {
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org" */
a[href$=".org"] {
  font-style: italic;
}

/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}

MULTIPLE

/* Links that start with "https" and end in ".org" */
a[href^="https"][href$=".org"] {
  color: green;
}

__css selectors__

https://stackoverflow.com/questions/6313711/attribute-selector-where-value-equals-either-a-or-b

commas are used to imply either / or

input[type="username"], input[type="password"] {
    color: blue;
}

cs-name, cs-date {
  // styles either one - which ever
}