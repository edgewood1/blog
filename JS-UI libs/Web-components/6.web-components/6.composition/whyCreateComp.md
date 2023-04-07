

----

 1. keep the textfield component generic. 
 
 Some of the styles are very specific to the context it is being used in rather than the state of the component. This makes the component less generic. See my comments below.


mdc-textfield.ts // :host([search]) #main 
 
 b. These can be moved to inbox-page in a mixin. For example, with the second one:

mdc-textfield.ts // :host([search]) #my-textfield

 2

Make a new component (like cs-clear-textfield) which contains the clear icon and texttfield in its shadow DOM and a property that determines whether the icon is before or after the textfield. That way text clearing logic can be contained and re-used even outside the inbox.


- moved the style to inboxpage as mixin
- change attribute 'search' to 'hide-label' AND it's a property in textfield - but not base... one is imported to the next... 
- 
 

We can talk about this when we meet, but essentially, but in _handleFlagchange, the chrome and ipad/safari event objects seemed to be built a little different. 

At one point, I created a flaggedStates object built around { Id: Flag, ... } for all the loaded studies, but when I refered to them in the <dom-if if="{{flaggedStates.item.Id}}"> but this didn't work either. 

id for that cell? 

