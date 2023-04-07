Consumer / provider

A host provides data, which is consumed by the target
If one element is bound to the data of another, 
it will reflect automatically any change in data? 

Data binding

Host element (parent?)
Target element (child?)

<target-element target-property = "{{host-property}}>>

Binding 
- the equation / attribute within the start tag.  
- a binding is a kind of attribute
- an other kind: href="https://google.com" (here we are not binding properties) 
- we bind a host-element property to how this property will be represented in the target
- do we say a 'host-property is bound to a target-property' and vice versa? 

Observing

I can observe an element's propety for data changes
If it changes, I can take actions, called "property effects"
3 kinds of property effects (3 ways of acting on data changes)
- observer - a callback invoked
- computed - a virtual property computeddatabinding 
- annotations that update propes, attributes, textcontent of DOM node when data changes. 

Processes

- refer to the above html tag
- broswer parses this into an HTML object
- the attribute becoems a property on this object
- then the HTMLobject becomes a DOM node?

