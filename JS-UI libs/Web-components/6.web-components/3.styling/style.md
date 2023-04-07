CSS

1. class = getClass()
2. class = variable
3. property > reflectToAttribute / :host([attr])
4. event > listen then varible = x
5. pass an attribute (create an attribute)
6. clsx - https://www.npmjs.com/package/clsx
7. javascript
8. host(context)
9. custom props


10. getClass()

  getClass() {
    return this._prevStudyVisible ? null : 'bottom'  
  }

 <mdc-fab class$="[[getClass()]]" id="saveFAB" icon="cs:save" on-tap="save" disabled="[[_shouldDisplayLoading]]"></mdc-fab>

5. 

 one element

         <mdc-textfield
          .label="${this.label}"
          @focus="${this.handleFocus}"
          ?opened="${this.open}"
          trailing-icon="paper-dropdown-menu:arrow-drop-down"
          slot="anchor"
          .value="${label}"
          ?clear="${this.clear}"
          ?disabled ="${this.disabled}"
          ?width="${this.width}"
        ></mdc-textfield>

 import clsx from 'clsx';

     <div class$="[[_generateClassNames(trailingIcon)]]">
      <dom-if if="[[trailingIcon]]">
        <template>
          <iron-icon
            class="material-icons mdc-text-field__icon"
            icon="[[trailingIcon]]"
          ></iron-icon>
        </template>
      </dom-if>


       _generateClassNames(trailingIcon) {
    return clsx('mdc-text-field', {
      'mdc-text-field--with-trailing-icon': trailingIcon !== null,
    });
  }

  ## Css

# attribute selector 

```css
a[target] {
  background-color: yellow;
}
```

above will select any tag that has a target attribute <a target="hello">

# polymer root

This.classList.add(‘something) // 

- you can create a property, like `population` with a value of `500` and assign it `Reflect to attribute`
- if you're doing this in `<app-name>` then this will appear as `<app-name population="500">`
- or if you add a class, like this.classList.add('something'), which adds a class="something" to the attribute (`this`)
- if study page has a class of something, ou could say: 
:host(.something)  {}   *** see Line 396 convention

https://www.html5rocks.com/en/tutorials/webcomponents/shadowdom-201/

host context


mdc-textfield
input {
width: var(--mdc-textfield-input-wide, 256px)
}
define in study page

give css dropdown an id 

#cs-dropdown {
     --mdc-textfield-input-width: 56px
}



custom variables

1. declare custom property in the :root psuedo-class
:root {
  --main-bg-color: brown;
}

2. use the var() function, and pass in the custom property - in this case, red is teh fall back if 

.one {
  color: white;
  background-color: var(--main-bg-color, red);

3. use values in js


element.style.getPropertyValue("--my-var");

dynamic classeless


.top-margin-2 {
    margin-top: 2em;
}
.top-margin-5 {
    margin-top: 5em;
}
Then you can generate your HTML with class="top-margin-#{margin}"


use less or sass



override previous classes

There are different ways in which properties can be overridden. Assuming you have

.left { background: blue }
e.g. any of the following would override it:

a.background-none { background: none; }
body .background-none { background: none; }
.background-none { background: none !important; }
The first two “win” by selector specificity; the third one wins by !important, a blunt instrument.

You could also organize your style sheets so that e.g. the rule

.background-none { background: none; }
wins simply by order, i.e. by being after an otherwise equally “powerful” rule. But this imposes restrictions and requires you to be careful in any reorganization of style sheets.

These are all examples of the CSS Cascade, a crucial but widely misunderstood concept. It defines the exact rules for resolving conflicts between style sheet rules.

P.S. I used left and background-none as they were used in the question. They are examples of class names that should not be used, since they reflect specific rendering and not structural or semantic roles.

setting  custom properties

https://vanseodesign.com/css/custom-properties-and-javascript/

How to style node-modules? 

see styles folder

 
https://stackoverflow.com/questions/49722415/vaadin-component-styling-confusion