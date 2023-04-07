

__polymer / observer__

observers are called whenever this value changes
it passes in the new / old value 

```js
  active: { type: Boolean, observer: '_activeChanged'}
     
  // Observer method defined as a class method
  _activeChanged(newValue, oldValue) {
    this.toggleClass('highlight', newValue);
    num ++ // num increases with each change
    this.mod = newValue + num

  }
```

__polymer / computed__

- returns a new value for a particular 
- in instance of a "derived prop", result of combining other props / consuming data vs direct props which provides data. 

```js
  active: { type: Boolean, computed: '_activeChanged(otherProp)'}
     
  // maybe this prop maintains the sum of all other items... 
  _activeChanged(otherProp) {
    return otherProp + this.mod; 
  }
```



__litelement / computed__

- use update / updated lifecycle 

```js
updated(changedProperties) {
  if (changedProperties.has('a') || changedProperties.has('b') ) {
    this.a = this.b + this.c
  }
}
```
here, the arg is a map of all changed props.  If one of the provider props are included, then we should re-calculate the consuming prop: 

- use getter / setter
```js
get my-prop() {
  return prop1 + prop2
}

set prop-name(value) {

}

```

__both__
```js
@property ({ type: Boolean, computed:'test(edit)', observer: 'now'})
  canEdit: boolean;
  
  test(newV) {
   // takes another value and toggles it
   return !newV
  }

  now(nv, ov){
    // we can then observe when this ioccurs
    console.log('data list', this.canEdit)
  }
```

__non-observed subproperties__

- lit-element only sees changes to the reference to the array, 
- so if we only change a single item or a property on an object, this reference won't change. 
- reference is the "address in memory"
- to create a new address in memory, we can used Object.asign OR use a spread

Invokes effects: 

`this.owner = 'Jane';`

does not: 

`this.owner.age = 5`

requires

this.owner = { ...this.owner }

OR 

`this.set('address.street', 'Half Moon Street');`

ARRAYS? 

this.address = [ ...this.address ]

OR 

``this.push('users', { name: 'Maturin'});``

__litElement__


num | polymer                    | litElement
----|----------------------------|-------------------------------------
1   | observer:string            | updated or? << actually its update>>



- use update/updated lifecycle


  update(changed: Map<string, any>) {
    if (changed.has('selectedFile') || changed.has('showDrawer')) {
      this.drawerOpened = this.selectedFile === null || this.showDrawer;
    }

if DOM updated and rendered, this method called, which highlights any property changes.  
Use this to observe and act upon property changes.
`changedProperties` is a Map. Keys are the names of changed properties; Values are the corresponding previous values.
  

  The get() method returns a specified element from a Map object: 

```js
updated(changedProperties) {
  if (changedProperties && changedProperties.get("focused") === false) {
    // Focus the amount input field, each time focused changes from false
    this.shadowRoot.getElementById("amountInput").focus();
  }
}
```


https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

 The has() method checks if a prop is present - it will be present if it has changed: 
updated(cp) {
  if (cp.has("))
}

looping throuhg: 

```js
    changedProperties.forEach((oldValue, propName) => {
      console.log(`${propName} changed. oldValue: ${oldValue}`);
    });
```