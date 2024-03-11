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

## Union

Combine two types using the union operator (`|`).

```typescript
type Combined2 = typeA | typeB;
```

- Contains properties of either `A` or `B` (not both).

Value may be any one of the listed types.

```typescript
let combine: {name: string | number} = { name: 'x'};
combine = { name: 4 };
```

Use type guards to distinguish which.

### Literal Unions

```typescript
let num: { age: 6 | 7 } = { age: 8 } // incorrect
num = { age: 6 } // correct
```


## Intersection Type

Combine two types using the intersection operator (`&`).

```typescript
type Combined = typeA & typeB;
```

- Contains properties of both `A` and `B`.
- In case of objects, the combined object would have properties of both types.
- The order of types doesn’t matter.


**Assertions: unions and intersections**

TypeScript will only allow you to do things with the union if that thing is valid for *every* member of the union. For example, if you have the union `string | number`, you can’t use methods that are only available on `string`:

```
let a: oz;
let b: oz;
a = { name: 'mel', age: 3 } as (oz & az);

// union: you can assign oz or az to it (not both)
b = { name: 'mel', age: 3 } as (oz | az); // error
```

**intersections**

`interface`s allowed us to build up new types from other types by extending them. TypeScript provides another construct called *intersection types* that is mainly used to combine existing object types.

```
interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;Try
```

Here, we’ve intersected `Colorful` and `Circle` to produce a new type that has all the members of `Colorful` *and* `Circle`.

```
function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// okay
draw({ color: "blue", radius: 42 });

// oops
draw({ color: "red", raidus: 42 });
```

**interface vs. type + intersection**

- types can only be extended via intersections
- interfaces uses teh extended

Since type aliases, unlike interfaces, can describe more than just object types, we can also use them to write other kinds of generic helper types.


