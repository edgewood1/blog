efficient rendering
le batches property updates
rerendering is done asynchronously
this is the update process

toAttribute - copies changes in property to toAttribute
fromAttribute - reverse: prop to toAttribute

hasChanged - checks to see if prop has changed 
setter - sets value to prop
getter - 

el.title = 'x' // before it was 'y'

- this fires the 'title' prop setter
- setter calls hasChanged, which returns true  
- since true, performUpdated called, which asks is previous request pending? 
- if there is - if a UI update is pending, it does nothing but get in line
- if there isn't it creates a micro-task (a promise) to execute the rendering 
- on the next round, the render is executed and the promise is fulfilled. 
- this use of a promise is called 'async rendering'
- if more prop changes occur before this render, they merely pile in line
- after we're done updating we say 'await el.updateComplete'
- thus it pauses until update cycle is over.
- since we have no commands, there are no more tasks on the stack
- thus, the microtask can execute.  (step 1): 
- it invokes shouldUpdate, whic recieves the props that have changed + their old values
- it will compare all these to see if a change should be done. 
- usually it reutrns true, but we can include instances where we want to avoid the update
- if shouldUpdate recieves a title value of 'no title' or undefined, then don't update.
- when shouldUpdate returns true, then update is executed, which reflect changes to attributes 
- then it calls render, updating the dom
- if first render, firstUpdated is called - allows us to submit initialization tasks
- then, updated fired.  after render
- then updateComplete promise gets resolved

Summary
- if you say a = "hello", this fires the setter for the prop 
- setter > hasChanged > perform/requestUpdate 
- peforemUpdate microtask consists of: 
  - shouldUpdate
  - update
  - render
  - updated 
  - resolve updateComplete 

  when you define a property, you allow litelement to control them such that any change to it will fire a setter.  


  manual rendering: requestUpdate 
we use this when we define our own setter and we want ta change in the property to cause a re-renderingconrolled props already have setters that evaluate if prop has changed, adn if so they are updated.
if we write our own setter, we lose that . 
so in the stter, we use. it. 

set title(value) {
  if (this._title !=== value) {
    const oldValue = this._title;
    this._title = value;
    this.requestUpdate('title', oldValue); // Called from within a custom property setter
  }
}

https://dev.to/julcasans/litelement-in-depth-the-update-lifecycle-18nk

polymer will not detect chages to sub-properties
does litelement have this issue?

next read long live... 
