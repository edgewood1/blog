
- 

parent / cs-comp
- using argumetns passed in

<div>
<slot></slot>
<div>

child component
- imports a parent
- uses the parent compoent, passing in "arguments"

<cs-comp>
<div id=a></div>
</cs-comp>


parent - child
#a is the parent / it nests

<div id=a>
  <p></p>
</div>

named slot


<slot name="title"></slot>


child component using imported

<cs-comp>
<div slot="title">