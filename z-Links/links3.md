
crticial rendering path 

https://classroom.udacity.com/courses/ud884/lessons/1464158642/concepts/16135285350923

see: custom States

class getters

https://javascript.info/property-accessors

what is super

https://css-tricks.com/what-is-super-in-javascript/

namespace

https://stackoverflow.com/questions/11651527/how-to-set-up-javascript-namespace-and-classes-properly

static var

https://stackoverflow.com/questions/1535631/static-variables-in-javascript

https://electrictoolbox.com/javascript-static-variables/

https://stackoverflow.com/questions/51381966/how-do-i-use-a-static-variable-in-es6-class



extend a class without super? 

https://stackoverflow.com/questions/31067368/how-to-extend-a-class-without-having-to-use-super-in-es6

double brackets

https://stackoverflow.com/questions/17174786/what-is-the-significance-of-the-double-brackets-for-the-prototype-property-i#:~:text=The%20double%20bracket%20%5B%5BPrototype,tight%20one%20object%20to%20another.&text=This%20object%20points%20to%2C%20or,%2C%20the%20native%20JavaScript%20Object).



The rules for ES2015 (ES6) classes basically come down to:

In a child class constructor, this cannot be used until super is called.
ES6 class constructors MUST call super if they are subclasses, or they must explicitly return some object to take the place of the one that was not initialized.
This comes down to two important sections of the ES2015 spec.

Section 8.1.1.3.4 defines the logic to decide what this is in the function. The important part for classes is that it is possible for this be in an "uninitialized" state, and when in this state, attempting to use this will throw an exception.

Section 9.2.2, [[Construct]], which defines the behavior of functions called via new or super. When calling a base class constructor, this is initialized at step #8 of [[Construct]], but for all other cases, this is uninitialized. At the end of construction, GetThisBinding is called, so if super has not been called yet (thus initializing this), or an explicit replacement object was not returned, the final line of the constructor call will throw an exception.

lifecycles

https://github.com/Polymer/polymer/issues/4108#issuecomment-258983943

observer mutation

https://www.smashingmagazine.com/2019/04/mutationobserver-api-guide/

https://eager.io/blog/three-real-world-use-cases-for-mutation-observer/

flexbox

https://www.youtube.com/watch?v=fYq5PXgSsbE

 

local

https://ncshedbuilders.com/contemporary-shed/

