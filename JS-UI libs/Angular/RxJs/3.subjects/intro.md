
```js
const x = new observable(sub => sub.next('a'))
```

__Space: Unicast vs. Multicast__

unicast 
- the subscriber function runs anew for each subscriber
- "a" emitted once for each subscriber
- each observer recieves the same produced values


multicast 
- the subscriber runs once for all subscribers
- each observer recieves the same produced value


__Time: hot vs cold__

hot 
- later subscribers will only get later emissions
- a subscriber gets emissions from the moment he subscribes
- he won't get past emissions
- a single stream
- another view: code gets executed even if there's no subscriber.

cold
- stream recreated for each new subscriber
- cosde gets executed when at least one observer present

usually:

| -    | unicast | multi |
| ---- | ------- | ----- |
| hot  | -       | x     |
| cold | x       | -     |
 
 
__Observables vs Subjects: Unicast + Multicast__


__Observables are unicast by design: each gets own instance:__

- each subscription receives the different values as observables developed as unicast by design.
- sub func runs once for **each** subscriber > each gets different results

  ```js
    import {Observable} from 'rxjs';

    let obs = Observable.create(observer=>{
      observer.next(Math.random());
    })

    // instance 1

    obs.subscribe(res=>{
      console.log('subscription a :', res); //subscription a :0.2859800202682865
    });

    // instance 2

    obs.subscribe(res=>{
      console.log('subscription b :', res); //subscription b :0.694302021731573
    });
```

__Subjects are multicast by design.: each gets same instance:__

- Subjects are similiar to an event-emitter
- it does not invoke for each subscription 
- subscriber func runs once for **all** subscribers
- each gets same output

  ```js
  import {Subject} from 'rxjs';

  let obs = new Subject();

  // both the subscription are got the same output value!.

  obs.subscribe(res=>{
    console.log('subscription a :', res); // subscription a : 0.91767565496093
  });

  obs.subscribe(res=>{
    console.log('subscription b :', res);// subscription b : 0.91767565496093
  });

  obs.next(Math.random());

  ```

  __Hot v Cold__

In multicast example, if `obs.next()` ran between subscriptions, then first would get it, but not the second

In unicast, `obs.next()` can only run before subscriptions, and all get it


__part 2__

| Observable                                                  | Subject                                        | Column C |
| ----------------------------------------------------------- | ---------------------------------------------- | -------- |
| Cold: Code executed if at least one observer.               | hot: code executes even if no observer         |
| http gets called for each observer / code runs for each obs | miss all values broadcast before obs created   |
| ie stream gets resent for each new subscriber               | ie later submissions get later emissions.      | C1       |
| -                                                           | -                                              | C2       |
| Uni-directional: Observer cant assign value to observable.  | bi-directional: observer can                   | C3       |
| Unicast: subscriber runs anew for all subscribers           | multi: subscriber runs once for all subscriber |
 
 

subject?
multicast, can cast values to multiple subscribers and can act as both subscribers and emmitter

https://stackoverflow.com/questions/47537934/what-is-the-difference-between-observable-and-a-subject-in-rxjs