
root - the one column or cell

grid - whole grid

      const grid = this.shadowRoot.querySelector('vaadin-grid') as any;
      const { item } = grid.getEventContext(e);

getEventContext object contains: 
  rowData
  detailsOpened: false
  expanded: false
  index: 21
  item: {firstName: "Cooper", lastName: "Rivera", address: {…}, email: "cooper.rivera@company.com"}
  level: 0
  selected: false
 
item is a reference to the row, and can be used




Grid

https://cdn.vaadin.com/vaadin-grid/2.0.0-beta1/demo/row-details.html

https://vaadin.com/docs/v14/flow/binding-data/tutorial-flow-data-provider.html

https://vaadin.com/docs/v8/framework/components/components-grid.html

https://medium.com/vaadin-designers-and-developers/reinventing-the-data-grid-242e4a89ca62

https://meowni.ca/about/

