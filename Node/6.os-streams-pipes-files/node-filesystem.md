Concerning the folders you mentioned:

/libs is usually used for custom classes/functions/modules
/vendor or /support contains 3rd party libraries (added as git sub-module when using git as source control)
/spec contains specifications for BDD tests.
/tests contains the unit-tests for an application (using a testing framework, see here)

NOTE: both /vendor and /support are deprecated since NPM introduced a clean package management. It's recommended to handle all 3rd-party dependencies using NPM and a package.json file
When building a rather large application, I recommend the following additional folders (especially if you are using some kind of MVC- / ORM-Framework like express or mongoose):

/models contains all your ORM models (called Schemasin mongoose)
/views contains your view-templates (using any templating language supported in express)
/public contains all static content (images, style-sheets, client-side JavaScript)
/assets/images contains image files
/assets/pdf contains static pdf files
/css contains style sheets (or compiled output by a css engine)
/js contains client side JavaScript
/controllers contain all your express routes, separated by module/area of your application (note: when using the bootstrapping functionality of express, this folder is called /routes)

I got used to organize my projects this way and i think it works out pretty well.
Update for CoffeeScript-based Express applications (using connect-assets):

/app contains your compiled JavaScript
/assets/ contains all client-side assets that require compilation
/assets/js contains your client-side CoffeeScript files
/assets/css contains all your LESS/Stylus style-sheets
/public/(js|css|img) contains your static files that are not handled by any compilers
/src contains all your server-side specific CoffeeScript files
/test contains all unit testing scripts (implemented using a testing-framework of your choice)
/views contains all your express views (be it jade, ejs or any other templating engine)
