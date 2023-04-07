__ANATOMY OF A NODE APP__

Index.js

Upper comment block – title, description, author, date
Dependencies – var x = require(‘./lib/math’) – exports assigned to x var, now every thing that math has decided to export has become available to use via x.
 Configure app object and add function keys and export

__Common node conventions__

Package.json file – sits in root of project – contains meta data about project
Dependencies list – if I find a module on npm, I add it to this list – it’s added to node_modules.
Now it can be required by just using name – not the path. 
Var newJokes = require

You can use resolved / integrity to note the exact version.
.npmrs – has a token that lets npm installation authenticate as a user against the cloud
/test – testing scripts held here
These are run by a ‘task runner’  such as mocha
Testing file includes travis.yml or .jshintrc
General purpose task runnner control the whole process – grunt and gup files are most popular

__Documentation and source control – github defacto__
Git – protocal
Github – saas provider of cloud based git repositories that allow facilitation between teeams
Environments an dconfiguration – options 1

__Style guides__
Air bnb
Linters – 

__Error handling __
*** what’s the difference between exceptions and callbacks for error handling? 

__Namespaces__
Avoid globals – polluting global namespace when possible
Avoid namespace collisions with any libraries you may be using

 




















