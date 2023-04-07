lit-html = html imported from @polymer/lit-element

static elements: 
html`<div>hi</div>`

expression: 

html`<div>${disabled?'off':'on'}</div>`

attribute 

html`<div class$="${color} special"></div>`

event: 

html`<button on-click="${(e)=>this.clickHandler(e)}"></button>`

use custom libraries - 

import 
npm install --save
@polymer/paper-checkbox@3.0.0-pre.21

----------

shadow dom - a dom feature
- a scoped sub-tree inside your element
- shadow host > <my-element> 
- shadow root > #shadow-root
- shadow tree > elements within the root

part of a components implementation that outside elements don't need to know about
polymer attaches a shadow root for each instance of the element an dcopies the html comment into the shadow tree - this may include style

slot elements

added to shadow tree
shows where child nodes would render
instance: <my-header>hi</my-header>
class: <header><h1><slot></slot></h1></header>
slot holds "hi"... i could also move hi by changing slot

named slots - used for multiple slots? no name becomes default
accept top level children

<my-header><span slot="title">A head</span></my-header>

<header><h2><slot name="title></slot></h2></header>

styles

