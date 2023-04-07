

 
---- 

createServer – this creates a web server object.  Each time a http requiest is made against the server, this function is called, so it’s called the request handler.  It returns a server object, which is an eventemitter, 


http module – 

var http = require('http');

this has a module called: createServer() 

http.createServer(function (req, res) { use res and req }).listen(3000);

this handler/lisnter takes two parameters: 

ServerResponse object – it is the writable stream back to the client, an dit has a host of methods and properties, such as
  res.writeHead(200, {'Content-Type': 'text/plain'});  res.write('Hello World!');  res.end();

Others: https://www.w3schools.com/nodejs/obj_http_serverresponse.asp


IncomingMessage object represents the request to the server.  It is the first argument in the request listener function. 

https://www.w3schools.com/nodejs/obj_http_incomingmessage.asp
