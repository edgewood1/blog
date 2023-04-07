<div *ngFor="let product of products">

  <h3>
    <a [title]="product.name + ' details'">
      {{ product.name }}
    </a>
  </h3>

  <p *ngIf="product.description">
    Description: {{ product.description }}
  </p>

</div>


*ngFor, the <div> repeats for each product in the list.
*ngIf - <p> shows if condition exists

extras
======

[ ] - property binding syntax; this assigns the value to a property within the class.  this property must be registered.  You can also use this in a template expression.



