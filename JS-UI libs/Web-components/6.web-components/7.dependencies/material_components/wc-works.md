
# load the liberaries

import {PolymerElement, html} from '@polymer/polymer';
import '@polymer/iron-scroll-threshold/iron-scroll-threshold.js';

#class

class SampleElement extends PolymerElement {

# html

  static get template() {
    return html`
      <iron-scroll-threshold id="ironScrollTheshold" on-lower-threshold="_loadMoreData">
        <div>content</div>
      </iron-scroll-threshold>
    `;
  }

# helper function

  _loadMoreData: function() {
    console.log('lower-threshold triggered');
    // load async stuff. e.g. XHR
    setTimeout(() => {
      this.$.ironScrollTheshold.clearTriggers();
    });
  }
}
customElements.define('sample-element', SampleElement);

# what it means

1. id > identifies this wc
2. on-lower-threshold > this is a custom event called "lower-threshold" that is used with 'on-' > this will run the _loadMoreData function
3. _loadMoreData 
  - uses id to get element
  - uses 'clearTriggers()' which is a method

web comonents list examples and: 

1. properties 
2. methods
3. events

#properties

'scroll-target' as an attribute

 <x-element scroll-target="scrollable-element">
   <!-- Content-->
 </x-element>

'scroll-target' as a property 

elements reference: 

appHeader.scrollTarget = document.querySelector('#scrollable-element');



#events

used in addEventListener

an event such as iron-form-presubmit

form.addEventListener('iron-form-presubmit', function(event) {
  event.preventDefault();

** try vaadin-time-picker

  #styling 

  outer layer - refers to DOM
  inner layer - refers to custom styling

  app-header {
  --app-header-background-front-layer: {
    background-image: url(...);
  };
}

documentation

--app-box-background-front-layer	Applies to the front layer of the background	{