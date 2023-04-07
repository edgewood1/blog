What is a behavior? 

a bhavior is an object that defines
- lifecycle callbacks
- declared properties
- defualt attributes
- observers
- event listeners

so it literally adds behavior to one of these. 
these are mixed into the baswe prototype
if mulitple behaviors define same function, the last one is used. 


mixins are now used instead.  

ironeresiazble beheavior

use in polymer element
it coordinates flow of resize events between eeemtns that controll size of children and elements that need to be notified when they are resized.

1
mixin the behavior

1. define hight / width properties
2. in cc, listen to 'iron-resize'.  when it fires, run a function that shows this.offsetWidth

The HTMLElement.offsetWidth read-only property returns the layout width of an element as an integer.

but, width only goes up to 100, and height is fixed.. 

IronResizableBehavior is a behavior that can be used in Polymer elements to coordinate the flow of resize events between 

1. ”resizers" (elements that control the size or hidden state of their children)
    1. Aka - vaadin-grid
2. "resizables" (elements that need to be notified when they are resized or un-hidden by their parents in order to take action on their new measurements).
    1. If you resize me, you need to let me know so that I can take action - that is, resize myself.

Elements that perform measurement should add the IronResizableBehavior behavior to their element definition and listen for the iron-resize event on themselves. This event will be fired when they become showing after having been hidden, when they are resized explicitly by another resizable, or when the window has been resized.
Note, the iron-resize event is non-bubbling.