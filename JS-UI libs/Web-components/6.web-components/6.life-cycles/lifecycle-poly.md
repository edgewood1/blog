
__Order__ 

lifecycle


1. **constructor()**

- fires before  DOM loading & get properties()
- declare / define a property / default values
- manually setting event listeners for the element itself.

2. __attributeChangedCallback__
- if element's attributes are changed, appended, removed, or replaced.
- Invoked when component attribute changes.
- Can be called multiple times during the lifetime of an element.

3. __ready__ 
- what is this, really? 
- Called once, when element attached to the document.  
- fired only once so work can be overwritten 

4. __connectedCallback__- 
- invoked whenever elmement inserted into DOM. 
- adding document-level event listeners.  
- can be called multiple times unlike constructor 
- items need to be disconnected, else do elsewhere

# On Close

5. __disconnectedCallback__  
Invoked when a component is removed from the document’s DOM.
- removing event listeners added in connectedCallback.


 

All lifecycle methods need to call the super method.


