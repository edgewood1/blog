

Hue - color itself - the pigment - measured in degrees - 360 =0

Saturation > fully intnsity to washed out fade / subtle

B - brightness - how ligth the color is

L - brightness goes to black or white pure

RGB - less intuitive; mixes 3 colors

Hex Code - number representation of RGB



You can use HSL colors anywhere you'd normally put a hex code:

```
.colorful-thing {
  color: hsl(200deg 100% 50%);
  border-bottom: 3px solid hsl(100deg 75% 50%);
}
```

The first number has the `deg` suffix since it's in degrees (from 0° to 360°), and the next two numbers are percentages (from 0% to 100%).

If you want your color to be semi-transparent, you can pass a fourth value for the "alpha" channel. This is a unitless number between 0 (fully transparent) and 1 (the default, fully opaque)

.first.box {
  background-color: hsl(340deg 100% 50% / 1);
}
.second.box {
  background-color: hsl(340deg 100% 50% / 0.75);
}
.third.box {
  background-color: hsl(340deg 100% 50% / 0.5);
}
.fourth.box {
  background-color: hsl(340deg 100% 50% / 0.25);
}



A lower alpha number means that the pixels are transparent. We'll see all the fun stuff we can do with this in an upcoming module.

**What's the deal with the slash?** A rising trend in the CSS language is to separate groups of values with a forward-slash (`/`). It isn't related to division, it's meant to segment values into logical groups. In this case, the first 3 values are related to the color, and the fourth value is related to the opacity, so they're separated with a slash.