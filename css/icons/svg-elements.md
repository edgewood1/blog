The **`<path>`** [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG) element is the generic element to define a shape. All the basic shapes can be created with a path element.

```
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z"/>
</svg>
```