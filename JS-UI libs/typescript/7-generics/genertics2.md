

next

https://www.typescriptlang.org/docs/handbook/2/functions.html



next p2

__generics__

## Objects: Defined

for objects, you need to use type / interface

```tsx
type GenericType<T> {
  value: T
}

type NormType = {
  value: string;
}
```

### Objects: Use

```tsx
const x: NormType = { value: 'hi'};
const x: GenericType<string> = { value: 'hi'}
```

### Functions: defined

```tsx
const x = (y) => y

const functionName = <T>(parameters): ReturnType => {
  // function body
}

const x = <T>(y: T): T => y;

const result = x<string>('hi')
```

but could also rely on inference

```jsx
const result = x('hi');
```

and even without the generic definition, it would infer.

so why use it? in cases where there might be more complex functions where type inference is not sufficinet alone.  Like, here item could differ from the items in array, but this enforces they be the same:

```tsx
function addItemToArray<T>(array: T[], item: T): T[] {
  return [...array, item];
}
```




