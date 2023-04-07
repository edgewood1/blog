.mdc-textfield--with-trailing-icon .mdc-text-field__input

.mdc-text-field__input

input  


padding-top: 20px

padding-bottom: 6px


mdc-textfields.ts
    :host([order-search]) #my-text-field {
      padding-left: 1px;
      padding-right: 1px;
      width: 120%
    }

// grid -- remove some padding between grid elements so that we can see the select button
// grid -- remove some padding in order number input so that we can see the value
site dropdown doesn't accept 'de-select all' yet it has an clear icon... 
// get the x to appear in the patient id
 
// using material-web-components
https://github.com/material-components/material-components-web-components/tree/master/packages/tab-bar

import MDCTabBarFoundation from '@material/tab-bar/foundation';

Understanding the Instructions: 

Slots: lists the elements that it accepts and handles, in this case, they are `mwc-tab`

Attributes: 

`activeIndex` is a number type that shows which tab is active - for this use, on-click, then you read the tab index, then make the corresponding change.  

CSS Custom Properties: none exist - we'd use the MDC custom properties - but how? 

Events: 
Event Name: MDCTabBar:activated	
Target: mwc-tab-bar	
Detail: {index: number}
Description: Emitted when a tab selection has been made.

This registers a listener for the MDCTabBar:activated event that will be emitted from mwc-tab-bar.  When it hears this, it will go to the tabChange function.  

  connectedCallback() {
    super.connectedCallback();
    const tab = this.shadowRoot.querySelector('mwc-tab-bar');
    tab.addEventListener(MDCTabBarFoundation.strings.TAB_ACTIVATED_EVENT, this.tabChange)
      -or-
        tab.addEventListener('MDCTabBar:activated', this.tabChange)
  }

This is similiar to placing an "on-click go to tabChange", which when happens the function is being called from the mwc-tab component rather than the cs-statement-tool component, so in the constructor, bind the listener

- a listener is a function that's called when a particular event type is called.  
- addEventListener is an EventTarget method that associates the listener with the eventtype. 

  constructor() {
    super();
    this.tabChange = this.tabChange.bind(this);
  }

  The listener: 

    tabChange(e){
    this._selectedTab = e.detail.index;
  }


.mdc-tab__text-label >> text turns yellow

mwc-tabindicator/sr/span
.mdc-tab-indicator__content
.mdc-tab-indicator__content--underline
