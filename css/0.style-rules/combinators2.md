descendent - anywhere below itself, on the same branch
child - directly below itself

__Descendant Selector__
- select all elements (p) inside element (div): 

Example
div p {
  background-color: yellow;
}

__Child Selector (>)__

- select all <p> elements that are children of a <div> element:

div > p {
  background-color: yellow;
}


__Adjacent Sibling Selector (+)__

Sibling elements must have the same parent element, and "adjacent" means "immediately following".

The following example selects the first <p> element that are placed immediately after <div> elements:

Only selects the p that appears immediately after a closed div: 

Example
div + p {
  background-color: yellow;
}

__General Sibling Selector (~)__

The following example selects all <p> elements that are next siblings of <div> elements: 

Selects all the <p> that appear after the <div> element closes:

Example
div ~ p {
  background-color: yellow;
}
