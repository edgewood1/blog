__super__

When do we need to call super()?

super() calls the constructor of the element's superclass (parent class). If an element's definition defines a class that extends another class and super() is not called explicitly, the element calls the constructor of the superclass by default.

When does this call need to be inside the constructor() function?

The proper place to call super() is inside the element's constructor() method.

And what are the consequences of not calling super() as appears in the case of the Shop app?

In the case where,

class MyElement extends Polymer.Element {...}
as in the case of the Shop App — the Polymer.Element constructor is called by default if super() is not called explicitly.


 