flattening - virtual Dom present for the purpose of rendering and event handling.  

not flatteneed - the way the code is actually written - this is how js sees it.  span elements with slot attributes to be inserted are still outside their slots. slot elements are empty.  


An HTMLSlotElement instance, or null if the element is not assigned to a slot, or if the associated shadow root was attached with its mode set to closed (see Element.attachShadow for further details).

Examples
In our simple-template example (see it live), we create a trivial custom element example called <my-paragraph> in which a shadow root is attached and then populated using the contents of a template that contains a slot named my-text.

When <my-paragraph> is used in the document, the slot is populated by a slotable element by including it inside the element with a slot attribute with the value my-text. Here is one such example:

<my-paragraph>
  <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
In our JavaScript file we get a reference to the <span> shown above, then log a reference to the original <slot> element the <span> was inserted in.

let slottedSpan = document.querySelector('my-paragraph span')
console.log(slottedSpan.assignedSlot); // logs '<slot name="my-text">'

only works on slotted elements: 

HTMLSlotElement
The HTMLSlotElement interface of the Shadow DOM API enables access to the name and assigned nodes of an HTML <slot> element.

Properties
HTMLSlotElement.name
DOMString: Can be used to get and set the slot's name.
Methods
HTMLSlotElement.assignedNodes()
Returns the sequence of elements assigned to this slot, or alternatively the slot's fallback content.
Examples
The following snippet is taken from our slotchange example (see it live also).

let slots = this.shadowRoot.querySelectorAll('slot');
slots[1].addEventListener('slotchange', function(e) {
  let nodes = slots[1].assignedNodes();
  console.log('Element in Slot "' + slots[1].name + '" changed to "' + nodes[0].outerHTML + '".');
});