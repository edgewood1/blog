<h2>Union Types </h2>

<hr>

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

We can build new types called **union types**

They are the result of 2 types **united together**.

The following combines `number` and `string` into a single type: 

```
	var id: number | string = '4' // ok
  id = 3; // ok
  id = null; // error
```

The catch: 

- we can pass in a number or string
- BUT we can only access methods that are shared between both Number and String
  - for example,  `id.toUpperCase()` is only on the string type so wouldn't be availabe on type `string | number`



```ts
function printId(id: number | string) {
  console.log("Your ID is: " + id);
  console.log(id.toUpperCase()); // toUpperCase doesn't exist on type 'string | number'
}
printId(101);//ok
printId("202"); //ok
printId({ myID: 22342 }); // Type {} not assignable to type 'number|string'
```

**The fix**

Narrowing -  helps TS deduct type.  Here we use the "if/else" to narrow:

```ts
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
		console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
		console.log(id);
  }
}
```

Another example: 

```ts
function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // Here: 'x' is 'string[]'
    console.log("Hello, " + x.join(" and "));
  } else {
    // Here: 'x' is 'string'
		console.log("Welcome lone traveler " + x);
  }
}
```





