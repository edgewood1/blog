## **When are angle brackets <> used?**

**When definining generics ~ they are used to accept arguments, like () accept args in functions**

It brackets are placed between the name + parenthesis/curly brackets

Below we are creating flexibility ~ asking the user of `identity` to supply the type.

only use a generic if you intend to use the parameter in multiple places? Below we use it to define the argument and return value:

```
function identity<T>(arg: T): T {
  return arg; // we cannot return a number in this instance
}
identity<string>("hello") // user supplies type string
```

**As alternative syntax for type assertion**

Is type-casting a synonym for type-assertion ? 

Two ways of asserting type: 

- `as val` after the literal
- `<any>` before the literal

```ts
let a = 1 as any;
let a = <any>1;
```

```
let square = <Square>{};
let square = {} as Square;
```

Example:

```ts
interface Props {
    x: number;
    y: number;
    name: string;
}

let a = {};
a.x = 3; // error: Property 'x' does not exist on type `{}`
```

Instead:

```
let a = {} as Props;
a.x = 3;

//or

let a = <Props> {};
a.x =3;
```



