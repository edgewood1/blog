-------------------------------------npm notes




npm run <command> [--sielnt] [-- <args...]

__commands__

install, run

__arguments__

npm run test:mobile -- --server https://cs-feature.epiphanyhd.com --specs suite/mobile/CSA-2263.js --dev

npm run serve -- --target https://cs-feature.epiphanyhd.com

__blank double dash__

commands
ls - list modules
outdated - are any modules outdated? 
up eslint - update eslinst
un eslint - uninstall it
audit - table of security falws
audit fix or npm up --force > fix these

npm init // creates a package.json file

npm install // creates node_modules + lock file 

you can move these two files to other places and set up the same good environment

if you want to set up with dev-depencies, just do npm i --production

ways to import 

If your module is only going to be used by one program, it can stay within the same project and be referenced by a relative path. If your module will later be shared separately or exists in a very different location from the project you are working on now, installing or linking might be more viable. Modules in active development also benefit from the automatic updates of linking. If the module is not under active development, using npm install may be the easier option.--- 

npm

https://medium.freecodecamp.org/introduction-to-npm-scripts-1dbb2ae01633

omit dev dependencies
 npm i --production

 npm ls - shows all modules

 npm ls --depth 0 // easier to read

 npm outdated - shows versions

 npm up eslint - update  only this

 npm up - update all

 npm un - remove

 npm audit - see vulnerabilities

 npm audit fix - fix them via updates

 Although a version of a module may have a security vulnerability, if you update it to a version with a different API then it could break code higher up in the dependency tree.
You can use the --force parameter to ensure the vulnerabilities are gone, like this:

stop page. 72

