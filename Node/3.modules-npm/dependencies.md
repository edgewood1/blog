Node is an open source server environment

Servers do things like open files and return content to client



Asynchronous means that server is ever ready to recieve new request and will not just wait for the first request to complete itself. 

Node creates pages, and crud files, collects data, and deals with database. 



1 .build a server that listens on a port

2. Use a module 

require() — this is how we might include a module

Var http = require(‘http’);

Then you can use its methods: 

http.createServer(function (req, res) { … 

3. Make yr own module

 Exports keyword makes properties and methods available outside the module file.  

The file <mod.js> below: 

Exports.myDateTime = function() {
Return Date(); };

Can be used as such: 

Var dt = require(‘./mod.js’);

./ — file located in same folder as node


——— file - ./count

Var counter = function(arr) {
Return “there are “ + arr.length; };

module.exports = counters; 

——

Var counter = require(‘./count’)

Counter([‘a’, ‘b’’, ‘c’);

———

If you have 3 functions in the module - 
Counter, adder, and pi, then — 

module.exports.counter = counter;
Module.exports.adder = adder;
Module.exports.pi = pi; 

————

Var stuff = require(‘./count’)

Stuff.counter — this refers to function

So 

Stuff.counter([‘a’, ‘b’, ‘c’)]

———————or 

module.exports.counter = function (arr) { …. }

—————————or 

Each function keeps its variable name

Then: 

Module.export = {
Counter : counter, 
Adder : adder,
Pi : pi };


xx


