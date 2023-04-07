 **Example one**: Arrays

Two ways to declare an array: 

- **sqare brackets** -  let fruits: number[] = [1, 2, 3]
- **generic array type** -  let fruits: Array<number> = [1, 2, 3]

**sqaure brackets**:

this might be called with <number>([1, 2, 3]) which means the argument would have type `number[]`  However, there is no `length` on array.  

```js
function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}
```

**generic brackets:**

```js
function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
    return arg;
}
```



