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