Terms

line - borders
track - space between borders
area - space surrounded by lines 
cell - a space unit

The grid is an invisible layer that can be assigned

__display__

grid > generates block-level grid
inline-grid > generates inline-level grid

__grid-template-columns/rows__

define columns and rows with tracksize

track-size - length: %, fr
line-name - an arbitrary name; by default assigned numbers left = 1, right = -1

what's the point of a line-name?

__fr unit__

- a unit of the available space

2fr 1fr
- col1 is twice as big as column 2

mixed values
- fr values divided between the space that's left AFTER other values have been assigned 
- eg: screen 800px wide: 
- assign col 1,2: 300px and 10% (80px)... this leaves 420px.
- assign col 1,2: 210px each 

__sizing functions:__

minmax()

this is a unit of measurement, like fr
it sets the min and max a unit can be
also: min() or max()

minmax(100px, 1fr)

repeat

repeat(4, 50px 100px) 
- create a set of 2 columns: 50, 100
- repeat 4 times - 8 columns total

repeat can take keywords
- auto-fill: fit as many columns as possible on a row, even if empty
- auto-fit, fit whatever columns there are into the space

grid-template-columns: 
  repeat(auto-fit, minmax(250px, 1fr));

grid-template-areas

syntax is a visualization of grid
- name (defined with "grid area")
- period - empty unit
- none - no area defined
* each row is a quote on a different line 

grid-template-areas: 

this creates a row of 4 columns: 
    grid-template-areas: 
      "30px 30px 30px 30px"

typically, you combine with rows/columns, and use it to assign "grid-area"s

    grid-template-rows: repeat(3, 1fr); 
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 
    "header header header header"
    "body body . sweet"
    "footer footer footer footer"
 
    /* 1 of the children */
    .container > div:nth-child(1) {
      grid-area: header;
      background: green;
    }

    when you use this syntax, the lines on either ends are auto-named: 
    left/top = header-start
    bottom/right = header-end
    * this means some of the lines might have multiple names


__grid-template__

short hand for areas [row-height] / [column-widths] 
* can't use repeat()

      grid-template: 
      "header header header header" 1fr 
      "body body . sweet" 1fr
      "footer footer footer footer" 1fr
      / 1fr 1fr 1fr 1fr;

__gaps__

row-gap + column-gap must be used together

* gaps not created on the outer edges

`gap` combines these (row + grid)

__organize div inside area/cell__

`justify-items` organizes along the row axis (left-right)
- start: pushes div to far left cell
- end
- center
- stretch: across the whole space

align-items organizes along column axis (up-down)

`place-items` does both of the above

If grid is smaller than container
and grid items are statically set
you can move the grid around the container

`justify-content` set the alignment of grid within its container
- aligns along row axis - right / levft

`align-content` 
- aligns along column axis (up / down)

`place-content`
- both above

grid-auto-columns/rows
- implicit tracks - tracks created when there are more grid items than cells in grid OR when a grid item is placed outside of the explicit grid
- this auto prop allows us to specifiy the widths of these implicit tracks

STOP--- 
https://css-tricks.com/snippets/css/complete-guide-grid/#grid-properties

grid-auto-columns: 60px; // all implict columns will be this wide



__CHILDREN PROPERTIES__

======

THIS HANDLES ALL THE REST OF THE UNDEFINED ROWS

grid-auto-rows: 100px -- if an item overflows grid / auto lays these // implicit
-- each row will be 100px height
grid-auto-rows: 50px 75px; // new pattern: short row then longer row
WE CAN DEFINE SOME ROWS with grid-template-rows, and then all those overflowing get caught by grid-auto-rows
 
  