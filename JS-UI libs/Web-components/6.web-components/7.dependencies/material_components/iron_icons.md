class ExampleElement extends PolymerElement {
  static get template() {
    return html`
      <iron-icon icon="cs: save"></iron-icon>
    `;
  }
}

customElements.define('example-element', ExampleElement);

cs-icon.js

      <g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>

    

icon: string | null | undefined
The name of the icon to use. The name should be of the form: iconset_name:icon_name.

src: string | null | undefined
If using iron-icon without an iconset, you can set the src to be the URL of an individual icon image file. Note that this will take precedence over a given icon attribute.

theme: string | null | undefined
The name of the theme to used, if one is specified by the iconset.