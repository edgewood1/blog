resultsTableLayout


div #resultTable

1. vaadin-grid properties
  - page-size
  - size
  on-tap
  theme

2. grid-column properties

  width 
  flex-grow
  id
  hidden

3. template / class = header

4. kinds of columns
  vaadin-checkbox
  vaadin-grid-sorter

5. column propeties
  direction
  on-sorter-changed


MINE

1. vaadin-grid

5. kinds of columns

  - gird-selection-column
  - grid-sort-column


- data is an array of objects saved to 'grid.items'

address: {street: "8170 Fallen Spring Path", city: "Five Brooks", state: "Mississippi", zip: "39548-5507", country: "USA", …}
email: "lucy.ward@company.com"
firstName: "Lucy"
lastName: "Ward"

grid.items.firstName
grid.items.address

so under column name, simply saying `path = "lastName"` would populate this with grid.items.lastName

since `grid.items.address` is more complex, then renderer is used.  This specifics sub-properties to be applied to column

grid-column properties
- flexGrow - cell width ratios

- path - item sub-property whose value gets displayed in colum body cells / also shown in column header if an explicit header / renderer not defined

- renderer - functoin for rendering cell content.  args: 

1.  root The cell content DOM element. Append your content to it.
2.  column The <vaadin-grid-column> element.
3.  rowData The object with the properties related with the rendered item, contains:

- rowData.index The index of the item.
- rowData.item The item.
- rowData.expanded Sublevel toggle state.
- rowData.level Level of the tree represented with a horizontal offset of the toggle button.
- rowData.selected Selected state.