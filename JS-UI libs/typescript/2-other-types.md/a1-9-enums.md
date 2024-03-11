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

========

## Enums

Enums allow defining a set of named constants.

### Numeric Enums

Initialize `Up` with 1, and the rest auto-increment (`Down` is 2); default initialization is 0.

```typescript
enum Direction {
  Up = 1,
  Down,
  Left
}
```

### Using Enums

```typescript
function response(message: Direction): void {
  console.log(message) // 2
}
response(Direction.Down);
response(2) // Argument of type '2' is not assignable to the parameter of type 'UserResponse'.
```

### String Enums

```typescript
enum UserResponse {
  No = 'n',
  Yes = 'y',
}
```

Usage:

```typescript
const x: UserResponse = 'n'; // won't work
const x: UserResponse = UserResponse.No;

function respond(recipient: string, message: UserResponse): void {
  console.log(message);
  if (message == UserResponse.Yes) console.log('yes');
}

respond("Princess Caroline", UserResponse.Yes );
```