optional chaining
https://www.codeisbae.com/typescript-optional-chaining-nullish-coalescing/

 

Nested properties are connected through a chain of properties.  

To access an end-link would imply that connecting values are valid

If a chain-link might be undefined, we can note this with the optional chaining operator ?

Thus, if reference is bullish, an error is not caused. 

```
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah'
  },
};
```



This object may or may not have a dog property

```
const dogName = adventurer?.dog?.name;
console.log(dogName);
// expected output: undefined

console.log(adventurer.someNonExistentMethod?.());
// expected output: undefined
```

