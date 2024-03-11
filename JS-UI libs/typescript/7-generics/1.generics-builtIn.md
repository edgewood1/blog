## __Built-in Generics__: Arrays + Promises

**Array** 

This is a kind of type called a 'generic'
it requires one type argument
a type connected to another type
generic types require more info via arguments

```
const names: Array<string> = []; 
```

same as

```
const names: string[];
```

for both, this will display all the string methods: 

```
names[0]. <---- string methods will now appear 
```

**Promise**

A promise that will resolve a string.

```ts
const promise = new Promise<string>((resolve, reject) => {
  ....resolve('hi') <-return a string
})

promise.then(data => {
  data.  <- ts knows this will be a string
})
```

and below ~ using Promise to show return type

```typescript
async function fetchApi<ResultType>(path: string): Promise<ResultType> {
  const response = await fetch(`https://example.com/api${path}`);
  return response.json();
}

const data = await fetchApi<User[]>('/users')
```

and

```js
function test(arg: string): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        if (arg === "a") {
            resolve(1);
        } else {
            reject("1");
        }
    });
}
```