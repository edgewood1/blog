
__nomenclature__

parent / host class containst a host-proprty

it contains a child-element, which is represented by a child class, which contains a child-property (the target property).

we bind the host-property (5) to the child-property. 


hostProperty = 5

<child-element child-property="{{hostProperty}}">

in this child element / class, the hostproperty will be accessed via child-property

But this translates into `childProperty`.  Polymer maps attribute names + property names in a specific way:  

- Dash-case becomes camelCase as prop:  first-name > firstName

- cambelCase in attribute becomes lowercase in prop: firstName > firstname


__notes__

if binding to built-in attribute, such as href, src, etc? We add a `$` afterwards: 
 
<a href$="{{hostProperty}}">

to booleans? Use a `?` afterwards (or is it $?)

<a test? ="{{}}" >

built-in | href$
booleans | test?

 
  
| Type          | Lit Element         | Polymer   |
| ------------- | ------------------- | --------- |
| Text content  | <p>${...}</p>       | -         |
| Attribute     | <p id="${...}"></p> | -         |
| Boolean       | ?disabled="${...}"  | disabled? |
| Property      | .value="${...}"     | -         |
| Event handler | @event="${...}"     | -         |
| built-in      | -                   | href$     |


__STEPS__

1. parent assigns value to an attribute inserts into element

```js
     <my-test user-name="hello"></my-test>
```
2. child creates a property equivalent and uses property however it likes. 

```js
  static get properties() {
    return {
      userName: String
    }

    static get template() {
      return html`
        <div> {{userName}}  </div>
      `
    }

    miscellaneous() {
      if (whatever) {
        this.userName
      }
    }

  ```





https://mderriey.com/2015/11/03/properties-attributes-in-polymer/

https://stackoverflow.com/questions/42321542/how-to-pass-an-array-as-elements-attribute