
__subject__
- a type of observable 
- observables are unicast by design; subjects are multicast.
 -implements both observable and observer

 var source = new Subject();
source.map(x => ...).filter(x => ...).subscribe(x => ...)
source.next('first')
source.next('second')


behaviorSubject
- type of subject that:
- needs an initial value as it must always returna value on subscription ven if it hasn't recieved a next()
- on subscription, it returns the last value of the subject


- an object
- it maintains a list of dependents called observers?
- notifies them of state changes
exercise
