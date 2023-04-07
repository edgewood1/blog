



element / node

https://stackoverflow.com/questions/9979172/difference-between-node-object-and-element-object#:~:text=So%2C%20in%20a%20nutshell%2C%20a,and%20a%20nextSibling%20and%20previousSibling.

Getters



DOMString



when a property doesn't exsit on an object



you can extend its interface



https://stackoverflow.com/questions/38324949/error-ts2339-property-x-does-not-exist-on-type-y

It is because TypeScript 2.7 includes a strict class checking where all the properties should be initialized in the constructor. A workaround is to add the `!` as a postfix to the variable name:

```js
makes!: any[];
```

https://stackoverflow.com/questions/49699067/property-has-no-initializer-and-is-not-definitely-assigned-in-the-construc



extends



https://stackoverflow.com/questions/41385059/possible-to-extend-types-in-typescript