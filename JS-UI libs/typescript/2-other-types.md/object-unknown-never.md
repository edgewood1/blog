

void - return value of functions that don't return a value

`object` - any value that isn't a primitive (ie, string, number, bigint, boolean, symbol, null, undefined)

- differes from an empty object type or a global type `Object`
- 

in JS, function values are objects with properties, etcThus, function types are considered to be `object. in ts



`unknown` - any value, but safer because its not legal to do anything with an unknown value

```
function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  a.b();
Object is of type 'unknown'.
}
```

`never. - - values which are never observed.  in a return type, function throws an exception or terminates execution of the program.   Also if nothing left in. a union, never is used.



```
function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}
```

`Function`  - global type describing props like bind, call, apply and others present in js function values.  



