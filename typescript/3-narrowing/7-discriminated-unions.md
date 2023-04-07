Discriminated uniosn

When every type in a union contains a common property with literal types, TypeScript considers that to be a *discriminated union*, and can narrow out the members of the union.

In this case, `kind` was that common property (which is what’s considered a *discriminant* property of `Shape`). Checking whether the `kind` property was `"circle"` got rid of every type in `Shape` that didn’t have a `kind` property with the type `"circle"`. That narrowed `shape` down to the type `Circle`.

We want kind to tell us what shape we're dealing with - circle or square. 

```typescript
interface Shape {  
  kind: "circle" | "square";  
  radius?: number;  
  sideLength?: number;}
```

`kind` represents a union of **string literal types** .  This helps us have a unique type and avoids misspellings

```typescript
shape.kind === 'rect' /// will always be false since types `circle | square` and `rect` have no overlap.
```

Error : radius might not be defined (it's optional)

```typescript
function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2;
Object is possibly 'undefined'.
}
```

Even with a check -

```
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
Object is possibly 'undefined'.
  }
}
```

How to ensure that radius or sideLength are present based on the kind property? Here we re-encode Shape

```typescript
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;
```

Now it knows That if its a circule, it will not have a sideLength property. 

Use that with a conditional to ensure its a circle, and the error goes away: 

```typescript
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
                      
(parameter) shape: Circle
  }
}
```

