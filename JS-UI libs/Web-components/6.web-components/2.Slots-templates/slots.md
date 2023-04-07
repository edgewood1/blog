ways to pass things into a component

1. attributes - this passes in the variable 5
<header start='my name'></header>

2. slots

<header>my name</header>


header component {

static get properties(){
  return {
    start: string
  }
}
  

static get template() {
  return html`
  <slot></slot>                     // equiv. of <div> my name </div>
  <button></button>
  `
}

OR 

static get template() {
  return html`
  <div> {{${start}}}                  // equiv. of <div> my name </div>
  <button></button>
  `
}

 
  

}

divs with slot attributes passed into child div name in the parent

<header>
        <div slot='a'>insert </div>
        <div slot='b'>insert</div>
</header>

header cmponent {
  static get template() {
    return html`
      <slot name="a"></slot>
      <div> fourth </div>
      <slot name="b"></slot>
  }
}

PASSING A STRING: doesn't require divs w/slot attributes in the parent OR name attributes in the child

<header> whatever </header>

header cmponent {
  static get template() {
    return html`
      <slot></slot>
      <div> fourth </div>
      <slot></slot>
  }
}

Light DOM are inserted through slot elements
