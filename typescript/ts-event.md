







Eventlistner - this gets type EventListner? 

this.addEventListener('keydown', this.a)



Event handler references the event Object

this.a = (e: Event) => { 

​	const a = e.target

 }



does Event contain target?

eventListner will only take particular parameters: 

- string? 
- Function? 