## ENUMS

describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is *not* a type-level addition to JavaScript but something added to the language and runtime



```JS
const colorRed =0;
const colorBlue = 1
```

```js
enum Color { Red, Green, Blue}  // like Color = {Red: 1, Green: 2, Blue: 3}
let backgroundColor = Color.Blue
```
or 

```js
enum Color {Red=0, Blue=1}
```

```js
enum Color {Red, Green, Blue};
```
default values for above 0, 1, 2

but > 

```js
enum Color {Red=5, Green, Blue}
let c: Color = Color.Green
console.log(c) // value is 1 .. this returns the item
```