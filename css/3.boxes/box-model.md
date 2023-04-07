

* Box model 
  

browser sees every element as a rectangluar box
each heading, paragraph, link is its own box
element size affected by - 

Five CSS properties used to determine size and spacing of elemetns

- width and height - sets specfici size for content box*
     -  inline requires display block or inline-block to use width / height
-  padding - adjust space inside element - between content and border
-  margin - adjusts space outside element - outside border
-  border - adds (more border) space beween padding and margin

these combine to give a total size of element. 

* length values - 
px = fixed sizing, but not flexible
% - makes it relative to size of containing element, good for responsive web design

* padding - shorthand / clockwise order startign top

padding t r b l - 4 values
padding x - 1 value same on all sides
padding t/b, rl - 2 values
padding t, rl, b = 3 values

mixing differnt types of length values
padding: 10px 2%

margin - adjust space around / outside of element
border - displays between margin/padding.

border width style color
border 2px solid red

padding - you don't want the content to go to the edge of the container

margin 0 - removes default space between lines
margin 10 - adds space around 

notice 
1. backgorudn color won't expand into the margin area because its adding space to the outside of element so doesn't become part of the elemetn
2. inline takes padding and margin values, but it will only push elements out horizontally, not vertically -so there's no space between lines.  these elements stay within the line.  
---- unless you use the display property. (display: inline-block) - block properties now affect all parts. 


 ------------------- best practice - keep page in natural flow, but: 

 by default block elements stack on top of each other
    x
    y
 you can use negative margin values to move elements ourisde of stack position

    x
y  <- margin: -20px 0 0 -20px

margin and to center align content blocks

content blocks stay centered regardless of window size

width: 950px  of block
margin: 0 auto .. > auto finds center of page 0 referes to top/bottom

but if we add above, the background color will shrink along with text. - 
because the width is smaller than container (browser), so color doesn't go all teh way across

so create a container for aligning the content.  
the background style assigned to container
center just the contet.  

 <!-- <section class="work">

<div class="content-wrap">
<h2>
yo
</h2>
</div>
</section> -->

.content-wrap { 

width: 950px;
margin: 0 auto;
color: white;
}
.work {
  background: green;
}

---------------------

A fixed wrap with sizing that's different than text means that if 
browser shrinks below sizing of one, there's a lack of properotion: 
text extends to a set place / but color doesn't or vice versa

so instead of width, use "max-width"

if browser larger than 950px (your width) it's fine,
if it becomes less than fixed witth, it now becomes 100& of container.
(the two boxes synchronize)
so, if value of width of browser is less than 950, 
it equals 100%, but maxes out at 950.
so we have flixbility yet some control.  

spaces between section - get rid of this with margin
add padding to each section so that there's space there. 
add it to the content wrap which will be placed on every secion.

white border around the entire page. this comes from default margin in the body element
thus wrapping the entire page.  
find body selector and make margin: 0 (0 doesn't require measurement units)

header, footer - shared together

header h1 - h1 only in header. 

adding center to footer, all h1, etc children inherit

padding - push content away from edge - increases size inside box - more space around etxt
margin - push other content away - no space around immediate text.

**other**

css

width

clientwidth - content andpadding
offsetwidth - above and border
pagex - to end of element, which may extend beyond viewport
clientx - viewport?
screenx - actual screen
offsetx - from edge of element

x - where we're actualdx change since first

offsetLeft - position left and margin from left edge of ... 
clent left

jenkin steps

build with params

