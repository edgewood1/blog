


Decorator (requires TypeScript or Babel)

export class MyElement extends LitElement {
  @property(options) 
  propertyName;
In either case, you can pass an options object to configure features for the property.

Property options
The options object can have the following properties:

attribute
Whether the property is associated with an attribute, or a custom name for the associated attribute. Default: true. See Configure observed attributes. If attribute is false, the converter, reflect and type options are ignored.

converter
A custom converter for converting between properties and attributes. If unspecified, use the default attribute converter.

hasChanged
A function that takes an oldValue and newValue and returns a boolean to indicate whether a property has changed when being set. If unspecified, LitElement uses a strict inequality check (newValue !== oldValue) to determine whether the property value has changed.

noAccessor
Set to true to avoid generating the default property accessor. Default: false.

reflect
Whether property value is reflected back to the associated attribute. Default: false. See Configure reflected attributes.

type
A type hint for converting between properties and attributes. This hint is used by LitElement’s default attribute converter, and is ignored if converter is set. If type is unspecified, behaves like type: String. See Use LitElement’s default attribute converter.