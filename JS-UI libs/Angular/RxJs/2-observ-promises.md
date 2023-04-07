Promises and Observables both handle the asynchronous call only.

Here are the differences between them:

__Observable__

- Emits multiple values over a period of time
- Is not called until we subscribe to the Observable
Can be canceled by using the unsubscribe() method
Provides the map, forEach, filter, reduce, retry, and retryWhen operators

__Promise__

- handles / Emits only a single value at a time
- uses only .then / .catch operators
