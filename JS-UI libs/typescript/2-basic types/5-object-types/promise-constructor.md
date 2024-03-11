**Promises**

```
const myPromise = new Promise((res, rej) => res(10));
 
myPromise.then(x => {console.log(x)}) //10
```

The generic type <string> refers to the return result of resolve - how?

You are calling the Promise class (constructor), which accepts any type and assigns it to the return of one of these functions.

- What's the difference? 
- promise object - what's returned by a promise class; represents the eventual completion of value; its a proxy for a value not necessarily known.  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- promise class - that which instantiates the object
- promise constructor - what we call with `new` and we pass in a function that it runs: (r,r) => r(10);

```
const myPromise = new Promise<string>((resolve, reject) => {
   resolve(10)});
 
myPromise.then(x => {console.log(x)})
```

There are just a few differences between class constructor signatures and function signatures:

- Constructors can’t have type parameters - these belong on the outer class declaration, which we’ll learn about later
- Constructors can’t have return type annotations - the class instance type is always what’s returned

src/actions/app.ts:383:9 - error TS2794: Expected 1 arguments, but got 0. Did you forget to include 'void' in your type argument to 'Promise'?

383         res();
            ~~~~~

https://stackoverflow.com/questions/65354965/error-ts2794-expected-1-arguments-but-got-0-did-you-forget-to-include-void



This function will return a Promise

the type refers to the return? or the promise itself will be a number?

```js
Function test(arg: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        if (arg === "a") {
            resolve(1);
        } else {
            reject("1");
        }
    });
}
```

begin again

 
