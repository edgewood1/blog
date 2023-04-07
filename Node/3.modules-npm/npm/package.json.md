

**npm init.**

name - name of project folder
version - in case this is published on npm repository; uses semantic versioning
major - changes when the api changes
minor - changes when features added
patch - changes when bugs are fixed
^ - any higher minor or patch version satisfies
~ - only higher patch versions satisfy
description - explains what module does
entry point - first program to load
keywords - useful words to help find your repo

dev-dependencies 
- used not for building or running it in prod
- not necessary for module or app to work
- mostly helpful in writing the code

auto-generated files
- node_modules
- package-lock.json > tracks all changes in package.json or node_modules
- - tells us the exact version of the package installed
- commit this instead of node_modules

**semantic versioning**

major.min.package

major - api changes
minor - feature change
patch - bugfixes

entrypoint - first part of program landedthis will load rest
keywords - help people find your repo

^ - h igher min/patch version satisife

TILDE
~ GET MOST RECENT PATCH
~2.2.3 | releases from 2.2.3 up to, but not including 2.3.0 are acceptable
2.2.3 may be current versio, but if a new patch releases 2.2.4+, download that.  
this won't break any functionality > patches just fix bugs


CARET^ - flexible minor / patch

- only major version shoul dpatch
- a minor / patch version greater than or equal to minimum is valid.

^1.2.3 permits versions up to but not including the next major ver: 2.0.0

https://nodesource.com/blog/semver-tilde-and-caret/



package-lock.json

- tracks all changes in package.json
- tells exact version
- we commit this - not the node-modules themselves
- generated on insatllation of package.json / npm install




TERMS

module - a file with function or obgject that can be exported
package - a collection of 1+ modules