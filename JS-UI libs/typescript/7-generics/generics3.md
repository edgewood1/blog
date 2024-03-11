
Summary
Combinations
- generics
- constraining a function
- keyof
- Indexed-access type



---

## Creating Types from Types

### Generics

- Types that take parameters.
- Defined using angle brackets (`<>`).
- Can be used with the `function` keyword or as a `const` with an optional name.
- The generic tag comes after the optional name.
- Used to set the type, similar to how a parameter sets an argument.

```typescript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

- Allows capturing the type the user provides.
- Two ways to pass a type to a generic function:
  - Explicitly set the type: `let output = identity<string>("myString");`
  - Type argument inference: `let output = identity("myString");`

- Call signature of an object literal type:

```typescript
let myIdentity: { <Type>(arg: Type): Type } = identity;
```

### Generic Interface

- Can be used to create a generic interface.

```typescript
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

let myIdentity: GenericIdentityFn = identity;
```

- Move the generic parameter to be a parameter of the whole interface.

```typescript
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

### Constraining a Function

- Constrain a function to work with any type that has the `.length` property using the `extends` keyword.

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // No more error
  return arg;
}
```

- Example usage: `loggingIdentity(3); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'`.

### Using Type Parameters in Generic Constraints

- Stopped
- Next

