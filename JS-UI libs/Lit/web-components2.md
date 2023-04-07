what are web componets? 

1. they are build on existing Web apis
   - CustomElements API (lets you create / register comopnents as new HTML elements that have their own lifecycle.
   - Shadow Dom ~ provides encapsulation of styles so comonet has its own mini-dom such that global styles can't affect it.
   - uses template/slot HTML elements
   - components compatible with nearly every ui framework / library and vanilla JS

what are benefits

2. web standards are more future proof than any given JS library
3. 



react + webomponents

This is both true and false. Web Components themselves work fine, but by default React passes all data to Custom Elements in the form of attributes, meaning you can’t pass objects or arrays without workarounds. Additionally, because React has its own synthetic event system, it cannot listen for DOM events coming from Custom Elements without the use of refs.

Both of these issues can be fixed, but for some they might be showstoppers. For our team the benefits of Web Components far surpassed these and we decided to work our way around these issues by automatically wrapping our Web Components with React based wrappers.


two modes of single page apps

react 
- builds UI components
- state-management files
- uses React classes

lit
- builds web components
- uses JS classes so all properties function as kind of state > no special 'hooks' for these
- props / children passed between components via events(upwards) or passing attributes to children tags (downwards)
- a web component has containerized styling (css-html)
