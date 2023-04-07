<h1> Arrays</h1>

<h2>Two ways of annotating arrays</h2>

let arr1: number[] = [];
let arr2: Array<number> = [];




<h2> Mixed Types</h2>

```js
const dates = [new Date(), '2030']
```

translates to a variable that is an array that takes strings or date objects (notice parenthesis)

```js
const dates: ( string | Date ) []
```
We can also use the above annotation to override inference that results from this:  
```js
const dates = [new Date()]
```
<h2> Tuples</h2>

array-like structure where 

- each element represents some properyty of a record.  
- an object called "drink" might have 3 properties: color (string), carbonated (boolean), sugar (number)
- items in a specific order

```js
var drink = ['brown', true, 40]
```
instead of annotating as an array, we add 

```js
const pepsi: [string, boolean, number] = ['brown', true, 40];
```
or we could create a type alias.
```js
type Drink = [string, boolean, number]; 
const pepsi: Drink = ['brown, true, 40]
```

tuples used with csv's, but still not often used because we can't mark the meaning of items.  



<h2> Array of arrays: </h2>



```js
const cars = [['a'], ['b']]
or
const care: String[][] = []  // 2-d array
```

 



**Types in Array.map** 

```js
const planets: Object = {
  mercury: { name: "Mercury", position: 1 },
  venus: { name: "Venus", position: 2 },
  earth: { name: "Earth", position: 3 },
};
```

`key` will be a `string`  and **map** will return/pass a `string`  to the evaulating function body: `planets[key]`     

 

```js
const planetsArr: Array<Object> = Object.keys(planets).map(
  (key: string): string => planets[key]
);
console.log("planetsArr", planetsArr);
```



