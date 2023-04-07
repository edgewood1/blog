
vaadin dialog - using the renderer function in lit-element:


1. create a function that renders html
2. create a bound prop - defined against its class
3. bind it in constructor
4. add it as a property to vaadin dialog element

https://vaadin.com/components/vaadin-dialog/html-api/elements/Vaadin.DialogElement


https://vaadin.com/forum/thread/17760006/events-from-vaadin-dialog-box-not-firing

https://glitch.com/edit/#!/vaadin-dialog-renderer?path=app.js%3A1%3A0


mwc-button clicks

1. add an eventhandlers to element @tap="${this._attemptLogin}"
2. add change handlers on mdc-textfield @change="${this.valueChange}"
3. in this function get equate:  source.id === 'username' ? (this._username = source.value) : (this._password = source.value);

** any eventhandler placed on an element has to be registered in the constructor like this: 
this._hideDebug = this._hideDebug.bind(this)

How to best hand super.update(sharedProps) so it's more like a computed? can we check this? 

https://github.com/Polymer/lit-element/issues/30

call `super.update()` at teh end to make sure computed properties are part of same render cycle

Since we can interpolate actual JavaScript expressions, we don't need any of the computed binding methods from our polymer-based implementation. We likewise don't need the property getters and setters from the vanilla version, since LitElement has its own mechanism for managing properties and attributes.


imports

add computed and observers to update

convert dom-if

render() {
    return html`
    ${elevationStyles}
    <div id="inputContainer">	    
    

    return html` 
      -  element tags follow
        - if you want to start js, then ${
          - if you want to include html inside this, html`

    
    return html`<div id="inputContainer">
      <cs-date date="{{startDate}}"></cs-date>	      <cs-date date="${this.startDate}"> </cs-date>
      <dom-if if="{{endDate}}">	      ${this.endDate ? html`- 
        <template>-<cs-date date="{{endDate}}"></cs-date></template>	       <cs-date date="${this.endDate}"></cs-date>
      </dom-if>	      ` : html``}
    </div>	    
  </div>



convert attributes