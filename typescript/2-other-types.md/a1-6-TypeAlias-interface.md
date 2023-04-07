

What is the difference between these statements (interface vs type-alias)?

```js
interface X {
    a: number
    b: string
}

type X = {
    a: number
    b: string
};
```

Interface - extendable; you can add more props later

Type - you can't add more props later



Extending an interface

```
interface Animal {  name: string } 
interface Bear extends Animal {  honey: boolean } 
const bear = getBear()  
bear.name bear.honey
```

Extending type via intersections

```
type Animal = {
  name: string
}

type Bear = Animal & { 
  honey: boolean 
}

const bear = getBear();
bear.name;
bear.honey;
```

adding new fields to an existing interface

```
interface Window {
  title: string
}

interface Window {
  ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```

a type can't be changed after being created

```
type Window = {
  title: string
}

type Window = {
  ts: TypeScriptAPI
}

 // Error: Duplicate identifier 'Window'.
```

**type alias**

- creating a new name for an existing type: 

 ```
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
 ```

