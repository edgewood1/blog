https://polymer-library.polymer-project.org/3.0/docs/devguide/style-shadow-dom


https://github.com/vaadin/vaadin-date-picker/issues/604

<!DOCTYPE html>
<html>
<head>
  <script src="bower_components/webcomponentsjs/webcomponents-lite.js"></script>
  <link rel="import" href="bower_components/vaadin-date-picker/vaadin-date-picker.html">
</head>  

<body style="height: 100vh">
  <dom-module id="my-custom-stuff" theme-for="vaadin-text-field">
    <template>
      <style>
        :host([theme="my-theme"]) [part~="label"] {
          color: red;
        }
      </style>
    </template>
  </dom-module> 
  
  <vaadin-date-picker label="My label" theme="my-theme"></vaadin-date-picker>
  
</body>

</html>

https://meowni.ca/posts/polymer-2-cheatsheet/

https://www.w3schools.com/jsref/met_node_appendchild.asp

https://meowni.ca/posts/part-theme-explainer/

https://www.bennadel.com/blog/3484-using-css-host-context-to-theme-components-in-angular-6-1-3.htm