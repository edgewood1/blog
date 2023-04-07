vaadin themes


    :host([theme~="dialog"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      padding: 0px;
      margin-left: 5px;
      margin-right: 5px;
    }


you can have mutliple themes, so 

<vaadin theme="dialog excaliber whenever">... 

the ~= only checks for that one world

