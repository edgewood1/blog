variables

@back: #lkejfsl

body {
  background: @back
}

mixins - take a css class/id and embed them in another
embed attributes in one class into another


.fancy {
  border:1px dashed black;
}

.fancier {
  .fancy;
  color: green
}

OR add open/closed parenthesis: only can be used to embed as mixin // can't be directly accessed 

.fancy() {   <<  
  ....
}

https://stackoverflow.com/questions/40308825/less-multiple-classes-and-pseudo-classes-with-the-same-style



https://ishadeed.com/article/css-has-parent-selector/



