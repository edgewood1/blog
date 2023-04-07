 
two environments - 

js in node 

- node is serverside using the same engine the runs chrome browser.
node doesn't have a predefined window object.
- locatino object is related to a url
- doesn't have a document object
- node has a global object, containing several objects not available in browsers, needed for server side works.  require object is predefined in node, used to include modules in the app. in node, everything is a module - code must be kept in modules, and thus node processes request objects  

js in browser

- window is a global object which has functions / attributes. location also with info abou thte url we loaded, document too, a global variable, 
- each has its own builtin functions

http://voidcanvas.com/node-vs-browsers/

https://stackoverflow.com/questions/19059580/client-on-node-uncaught-referenceerror-require-is-not-defined



NODE / Browser

BROWSER – many global variables available – window.open, .onload, .document, .onchange, .oncut – these don’t exist in node
NODE (backend) – browser can’t use require
Node is a single static environemtn / browser is many (opera, chrome, safari, etc – cross browser issues)
What about issue of writing node in mac vs pc, or a different pc setup – docker allows you to create a contained environment in which to run an app (image)
Node source code can’t be seen by the end user.  Thus you can use private keys etc… 

Rhino is a js runtime env for java – like v8 for chrome? 

These are sent as headers rather than query strings