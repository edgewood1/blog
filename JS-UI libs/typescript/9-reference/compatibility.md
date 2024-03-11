<h2> Compatiblity</h2>

https://www.typescriptlang.org/docs/handbook/type-compatibility.html

x is compatible with `y` if `y` has at least the same members as x

Below, `dog` is compatible to `Pet` because it shares `name: string` - 

```ts
interface Pet {
  name: string;
}
let dog = { name: "Lassie", owner: "Rudd Weatherwax" };

function greet(pet: Pet) {
  console.log("Hello, " + pet.name);
}
greet(dog); // OK because paramter pet requires at least name, and dog has that.
```

Comparing Two Functions

Parameter types

```ts
let x = (a: number) => 0;
let y = (b: number, s: string) => 0;
y = x; // OK because all x parameters have a corresponding type in y 
x = y; // Error because x does not have a string parameter.
// names of parameters unimportant.
```

return types

```
let x = () => ({ name: "Alice" });
let y = () => ({ name: "Alice", location: "Seattle" });
x = y; // OK b/c x can discard location
y = x; // Error, because x() lacks a location property
```

