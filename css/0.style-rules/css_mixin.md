CSS Mixins

CSS VARIABLES

Css variables aka custom properties

https://github.com/ehd-dev/cardioserver_web/pull/697/commits/29df9608da06618adfc495e8e21208c6f31d77d5

two ways of sizing a textfield

- explicitly from within component
- implicitly from parent (whatever parent that may be)

CSS mixin vs CSS parts

? 

Inheritance

a property can be defined in a grandparent and be accessed by a grandchild without drilling.



a property can be defined in the same component it is used

First we define in the host of the component 

    <style include="shared-styles">
    :host {
      --mdc-textfield-container: {
        max-width: 250px;
        min-width: 100px;
      }
    }

Then we use it in the component, applying it to an element

```
   mdc-textfield {
          --mdc-textfield-container: {
          	 display: flex;
          }
```


Then in the appropriate place - say in the textfield component - we apply

```
   .mdc-text-field {
      @apply --mdc-textfield-container;
```

Question: 

how does @apply differ from width: var(--mdc-textfield-container)?

we use the first when applying a group of styles

we ue the latter when applying one.

**Example 2**

CSS MIXIN

top element

      middle-element {
        --inner-mixin: {
          color: #f00;
        }
      }


      <middle-element></middle-element>


  middle element

        <inner-element></inner-element>

  inner element

        <style>
      div {
        @apply --inner-mixin;
      }
      </style>
      <div>Inner Element</div>



----

      --my-text-field: {
    border-color: white;
    padding: 0px;
    position: relative;
    left:3px;

}



**Notes 3**



Custom properties for cascading variables

Two parts 

Define the variable.  Below it is scoped to the :root pseudo-class which makes it availabel globally.  Everything inside <html>

:root {
--green: #73u83; }

Apply to id=foo using the var() function to apply value to background function.

#foo {
Background-color: var(--green)}

Layering variables (using variables within others)

--top:  orange;
--bottom: yellow;
--my-gradient: linear-gradient(var(--top), var(--bottom));

You can redefine a variable for a new element-scope, and this new value will apply to this element and all its children

https://www.sitepoint.com/practical-guide-css-variables-custom-properties/

css varaibles are subject to the cascade

**Example 4**

__blog__

in styles, define: 

    :host {
      --data-interpretation-height: 190px;
    }

in styles use or calc w/o quotes/tilde

    #dataContainerTablet {
      display: flex;
      flex: 0 0 var(--data-interpretation-height);
      height: calc(var(--data-interpretation-height) - var(--data-paper-card-margin) * 2);

quotes for var() or calc() if in js

    (this.shadowRoot.querySelector('cs-popout-card') as any).style.minWidth = this.hasPreviousStudy ? 'var(--popout-min-width)' : 'calc(var(--popout-expanded-width) - 50px)';

__part two__

**element used by parent: mdc-textfield.ts // 

```
mdc-text-field {
  @apply --mdc-textfield-container;
}
```

**parent using mdc-textfield

```
#this-mdc-textfield {
  --mdc-textfield-container: {
       display: xyz... 
  }
}
```

__cs-dialog.ts__

```
<style>
mdc-textfield::part(test) {background: green}
cs-dropdown::part(test) {background: black}
</style>
```

<mdc-textfield>... // turns green 

<cs-dropdown>...  // turns black 

__cs-dropdown.ts__

```
<mdc-textfield.ts exportparts="test">
```

__mdc-textfield.ts__

```
<div id="main" part="test">
```

__cs-dropdown.ts__

```
  mdc-textfield#main {
    @apply --cs-test;
  }
```

 

**References**

https://drafts.csswg.org/css-shadow-parts/

css mixin

https://hashnode.com/post/creating-native-css-mixins-with-apply-rule-cinh1j54c01hla153n9x73770

css shadowparts

transform

https://css-tricks.com/almanac/properties/t/transform/

parts, slotted, link style properties
https://www.youtube.com/watch?v=9flT7pFyaXM

