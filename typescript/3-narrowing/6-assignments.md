**Assignments**

when we assign to any variable, TypeScript looks at the right side of the assignment and narrows the left side appropriately.  Assignability checked against the declared type

```tsx
const a = 'hi'

let x: string | number =  a === 'hi' ? 1 : 'goodbye'
 
x= true; // error

Type 'boolean' is not assignable to type 'string | number'.
```

**Control flow analysis**

TS uses this to narrow types as it encoutners typeguards an dassignments

so for a function that accepts number | string, 

so as it encoutners an "if statement" for "numbers", it will deduct that the type is strings

```
function example() {
  let x: string | number | boolean;

  x = Math.random() < 0.5; // boolean

  if (Math.random() < 0.5) {
    x = "hello"; // string
  } else {
    x = 100; // number
  }
  return x; // 
}
const y = example() // y will be number if the random number is greater than .5
```

**Type Predicates**

Type predicates in TypeScript help you narrow down your types based on conditionals: if a function returns true, change the type of the paramter to something more useful. 

They’re similar to type guards, but work on functions. 

Typical Type Checking

Here, we use `isString` to check the type: it will return `true` if type is `string`

```typescript
function isString(s) {
  return typeof s === 'string';
}
```

We can use it to check if its a string, but we'll still get an error because its type unknown

But below, the validation is wrapped in a function, so the type of x doesn't change as it does it type guards..

```typescript
function toUpperCase(x: unknown) {
  if(isString(x)) {
    x.toUpperCase(); // ⚡️ x is still of type unknown
  }
}
```

So re-write the validator as a function whose return type is a type predicator - this will change the type of string, if it's posssible.  Below `s is string` is the type predicate.

```typescript
function isString(s): s is string {
  return typeof s === 'string';
}
```

The above says that you plan to return `s` as a `string` ONLY IF its typeof value is `string`. Define a function whose return type is a type predicator

 Example 2

Here we check to see that pips is not only a number, but a certain number 1-6

```typescript
function pipsAreValid(pips: number) {

  return pips === 1 || pips === 2 || pips === 3 ||
    pips === 4 || pips === 5 || pips === 6;
}
```

Here, we use the validator: 

```typescript
function evalThrow(count: number) {
  if (pipsAreValid(count)) {
    // my types are lying 😢 - count is not technically a number but a kind of number
    switch (count) {.... 
```

Rewrite teh validator so it changes the type to a "kind of number"

```typescript
type Dice = 1 | 2 | 3 | 4 | 5 | 6;

function pipsAreValid(pips: number): pips is Dice {
  return pips === 1 || pips === 2 || pips === 3 ||
    pips === 4 || pips === 5 || pips === 6;
}
```