sass

__SASS issue__

Questions > 

- how do you know which file to import? 
- why isn't it not checking in nodemodules for import? 
- how to create the -css.js file? (condenesed) 
- what is the structure? 

__typical structure__

cs-menu-surface
- cs-menus-surface.ts / imports css.js + mdc.. 
- menu-surface.scss // imports mdc-menusurface
- menu-surface-css.js // exports condensed

mdc-textfield.ts. 


import MdcTextFieldBase from './mdc-textfield-base.js';

import TextfieldCss from './textfield-css.js'; 

./textfield-css.js

miniature file
