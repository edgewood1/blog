__What are custom elements?__ 

- self-made elements that contain their own semantics, behaviors, markup and can be shared across frameworks and browsers. They exist without third-party frameworks

__how to create one?__

- tech 1 - add innerHTML to the CE (stopped at the end of this).
- tech 2 - create template in HTML and not JS
- tech 3 - create template using JS - add via .innerHTML.
- tech 4 - append node as a shadowroot. 

object life cycles
- constructor > code inserted at moment of creation // happens at moment of 'new'
  - memory allocation (declaration of a variable) - reserving space fo robject
  initialization - assigning values to object fields, runnin g other code (definition of variable / assigning values)
- destructor > code inserted at moment of destruction
    - finalization / removing value
    - memory deallocation // removing from memory


__tech 1__

1. begin with a class that extends a built-in element (would a function work?)? 

- register class in the browser using `customElements.define`

```js
class AppDrawer extends HTMLElement {
  }
window.customElements.define('app-drawer', AppDrawer);
```

2. populate this class with a lifecycle method.  

- 3 such methods include:  

- **constructor** - runs when object (node) is created: `createElement`
  - create shadow DOM here.
  - can't add or set an attribute. ???  

- **connectedCallback** - runs when object / node / component is attached to the DOM via  `appendChild`  

- **attributeChangedCallback** = runs when user changes object's attributes / properties.  
    - we can use a static `get observedAttribute` to notice attribute changes 

How to add node? 

- use innerHTML to add DOM element 

```js
    constructor() {
      super()
        this.innerHTML = `<h1>Hello, World!</h1>`;
    }
  ```
- Place custom element in an html file:

html
```html
    <app-drawer></app-drawer>
```
 

Questions: 
1. what does innerHTML do? It gets or sets the HTML of an element.  T insert the HTML rather than replace contents, use `insertAdjacentHTML()`
2. is that a template strings? string literals that allow for multi=line strings and string interpolation.  Used via backticks. https://hacks.mozilla.org/2015/05/es6-in-depth-template-strings-2/

3. what does "this" refer to?  it refers to the custom-element itself as the object instantiated by the class.  The class is the 'constructor' for the new object/element.  Does this happen in define()?  

##### TECH 2: create template in HTML and not JS

or you might use a template in the html.  a template holds hidden content.  We will copy its contents and add to customelement: 
```html
    <template id="hi"> shit </template>
    <app-drawer></app-drawer>
```
In this case: 
1. get template
2. copy the template notde to document ***
3. append it to the custom element.  
4. append the previous hellow world

```js
    const template = document.getElementById('hi');  // 1
    const node = document.importNode(template.content, true); // 22
    this.appendChild(node); //3
    this.insertAdjacentHTML('beforeend','<p>hello</p>') //4
```

*** use document.importNode() to create a copy of the template’s content and prepare it to be inserted into another document (or document fragment). It takes two argumnts: 
  1. grab the template
  2. use `document.importNode` in order to create a deep copy (gets all the children) of the node/documentfragment held in `template.content`, which holds the fragment that is in the template. 
  3. append this copied node to the customElement.
  4. as a special add, preserve our previous this.innerHTML.  We can't use innerHTML here because it would wipe out the node appended to the child.  WHY?

this could be done inside the constructor or outside the class.

Note: We could have used the template.content directly, as in: `this.appendChild(template.content)`.  This would remove the content from the element and added to the DOM.  But if we wanted to use it later, we'd be unable to.  (it's got a one-time use - any DOM node can only connect to one location).  But if we merely copy it, we can re-use in multiple locations.

Because this is a template, slots will show.

DOM:
```html
<!-- this is still invisble -->
<template id="hi"> 
  #document-fragment
</template>
<!-- this is visible -->
<app-drawer>
  <!-- 'shit' is the fragment from the template -->
  "shit"  
  <h1> Hellow world</h1>
</app-drawer>
```

##### TECH 3: create template using JS - add via .innerHTML.

- this can be done in the constructor or the connected callback - especially if you use `this.template` instead of `const template`

 ```js 
  const template = document.createElement('template'); // 1
  template.innerHTML = `<h1>Hello, World!</h1>` // 2
```
We would copy and append as before.   

### tech 4
or we could append it as a SHADOW DOM element: 
but this would overwrite any other inner HTML defined in the connected Callback - why 

```js
  this.attachShadow({mode:'open'}) // 1
  this.shadowRoot.appendChild(template.content.cloneNode(true)) //2
```
1. create a shadowRoot and attach it to the customElement. `mode:open` elements of shadow root are accessbile from JS outside the roo.  so we can use `element.shdadowRoot`  `mode:closed` denies access ot the nodes of a closed sr from js outside. it. 
2. use `cloneNode` instead of `importNode`.  `cloneNode` returns a duplicate of node on which method was called: `newClone = node.cloneNode([true])`  - true if we clone whole subtree or only node.  `this.shadowRoot` refers to the shadowRoot created and attached - to this we will apend our copied template. 

This creates an encapsulated DOM element (app-drawer) so any style inside it doesn't affect anything else:

```html
<h1>hi</h1>
<app-drawer>
  #shadow-root
    <h1> Hellow world</h1>
</app-drawer>
```
