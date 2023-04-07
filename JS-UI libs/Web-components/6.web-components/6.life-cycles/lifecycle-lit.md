__ORDER CALLED__

see app/src/index

1. constructor()
2. connectedCallback
4. update (n/a)
5. render
6. firstUpdated
7. updated

**constructor** - 
 - element created

**connected callback** 
- element inserted into DOM (so available to querying) / node present on document.  
- access to lightDOM.super 

**should update*** (optional) 
- called if requestUpdate() called 
- called if prop values change. 
- asks - should we run the render cycle? 
- parameter outputs: 
  - map of prop name + old value
- only updates if returns true.

  - here, create query assignments for easy access / prelim work, like auto focus.: 
    `this._form = this.shadowRoot.getElementById("form");`
  - if prop set here, element update triggered  
  - Use this only if there is no other way of calling declarative templates / functions via render

	```js
  shouldUpdate(changedProps) {
		return changedProps.has('person');
  }
  ```

**update** - n/a

- reflects property values to attributes 
- calls render to render DOM via lit-html. 
- Provided here for reference. 
- don’t override or call this method.  

**render** 
- element rendered on the screen  0 render 
- don't run side effects here. 

**firstUpdated***

**updated*** 

- after updating, we do what?


__What runs on a property change (order)__
    
- shouldupdate*
- render
- updated

__other things that run (under the hood? / behind the scene)__

someprop.hasChanged
reuestUpdate
performUpdate
updateComplete

__details:__

__what happens when value assigned to prop?__

- hasChanged called and returns true
- performUpdate called, which asks: is there a previous request pending? 
  - Yes ~ do nada; 
  - No ~ create a promise (a micro-task) to execute render - async way of ... 

__when a value assigned to a 2nd prop__

- hasChanged called, returns true,  
- performUpdate called, ... blah
- is updateComplete promise resolved? completes after update cycle... 
- when no tasks on the stack, we executed micro task: 
- shouldUpdate called, which gets props changed and their old values - this method evalutes all batched changes and based on that decide if upate hsould be done.  it always returns true, unless we want special logic to avoid update.  
- update called - which relfects changes to attributes to maintain synchrnoy between props and atrtributes - if prop defined with Reflects
- render called, which updates DOM
- firstUpdated runs if first time- another hook that lets us over-writeif we need to do initiliazation tasks after rendering
- updated called - another hook - always called
- updateComplete promise resolved. 


