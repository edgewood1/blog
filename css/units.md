



relative

Em - equal to the font size of the current element - So `font-size` has to be defined alongside whatever will use `em`

```html
<div style="font-size:10px; width: 2em; height: 1em; border: 1px solid black">
    hello
</div>
```

Rem - it's alwys relative to the root element, the `<html>` tag. 



```css
html {
font-size 16px;
}
h1 {
font-size: 2rem; // 32px
}
```

However, `px` overrides users defaults, so use `em` instead.  

```
html {
  /* 20% bigger `rem` values, app-wide! */
  font-size: 1.2em;
}
```

Percentage

```
.outer {
width: 250px;
height: 250px; // set size
}
.child {
width: 50%; // relative size
}
```



Application

- typography - rem
- box model - px
- color - hsl