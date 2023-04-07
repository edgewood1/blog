$('cs-app').shadowRoot.querySelector('#udiDialog').querySelector(.... )

custom Elements spec is part of Web Components

customElementRegistry interface is a class? 

You can get an instance of it via window.customElements (this is the object)

To register a custom element on the page, you use the CustomElementRegistry.define() method.
However, the example shows the object - 

customElements.define('word-count', WordCount, { extends: 'p' });

life cycles

1. when created
2. when added
3. when removed


https://goo.gl/Ykp35L

we can extend a custom element that extends a native element