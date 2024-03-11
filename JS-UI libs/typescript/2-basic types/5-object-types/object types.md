

Function type expressions

There are various types: 

**object types** can be represented in 3 ways.

The following describes an object that has two properties: one is a string type, the other a number.

1. anonymous

```tsx
person: { name: string, age: number }	
```

2. interface

```
interface Person { name: string; age: number }
person: Person;
```

3. type alias

```
type Person = { name: string; age: number };
person: Person;
```





**An object ...** 

var x = {}

**... is created from a constructor (function) ..** 

var x = new function() {};

**.. or a class**

var x = new class {}

