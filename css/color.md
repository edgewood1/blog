

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





**Hexadecimal colors**

#RRGGBB

All values must be between 00 and FF.

For example, the #0000ff value is rendered as blue, because the blue component is set to its highest value (ff) and the others are set to 00.

**RGB colors**

An RGB color value is specified with the rgb() function, which has the following syntax:

rgb(red, green, blue)

Each parameter (red, green, and blue) defines the intensity of the color and can be an integer between 0 and 255 or a percentage value (from 0% to 100%).

For example, the rgb(0,0,255) value is rendered as blue, because the blue parameter is set to its highest value (255) and the others are set to 0.
RGBA colors