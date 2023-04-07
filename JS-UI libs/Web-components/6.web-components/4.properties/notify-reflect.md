**notify v reflect**

| polymer            | lit          | meaning                                                                             |
| ------------------ | ------------ | ----------------------------------------------------------------------------------- |
| reflectToAttribute | attribute    | adds attribute to dom / for CSS use & allows parent prop to pass down to child prop |
| notify             | custom-event | notifies parent of change - doesn't require reflect                                 |

**reflect (lit)**

```js
  @customElement('cs-textfield')

  @property({ type: Boolean, reflect: true, attribute: 'left-side' })
  leftSide: boolean = false;
```

`:host([left-side]) div { background-color: green }`

- now leftSide will appear as `left-side` in element tag 
- we can than style based on its presence. 


`<cs-textfield leftSide> </cs-textfield>`



**Notify (polymer)**

- this is used for 2-way binding (namely, upward data flow)
- when property changes, an event property-name-changed is fired.
- a change to `this.firstName` fires `first-name-changed`.
- these events don't bubble, so listneer must be added directly to element

In addition, 

Notify property in child `someProp`

use child element in parent element

pass in a `some-prop = "{{someProp}}"` as an attribute to child element



- child changes > adult changes (viceversa)



 * in polymer, special methods are sometimes used to notify of change:  
 * 

 nortifyPath 
 notifySplices -

 this.notifyPath('address') won't pickup a change on address.street

* behidn the scenes, it fires a propert-name-changed event
  - `this.firstName` changes, then `first-name-changed`fires 
  - `this.intersecting` changes, so `intersecting-changed` fires

__lit element__

- you do this functionality yourself via: 

* add event listener ( do it directly to element generating event since there's no bubbling) 

* dispatch custom event in child, listen in parent 

 