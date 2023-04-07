

these properties are extracted from the req - 

req.on(‘data’, function(data) { buffer += decoder.write(data) << payload

as data is extracted, it’s passed throught the decoder and then to ‘buffer’

req.end(‘end’, function() {

when the extraction reaches an end, end the decoding process and… 

buffer .. decoder.end()

at the bottom of the page, two handlers are defined: handlers.notFound & handlers.sample (aka router.sample) .  We search the router object for the trimmedPath.  How? Typeof(router[trimmedPath]) is undefined, then the path supplied is not a handler.  In this case, chosenHandler – handlers.notFound.  Ifget the trimmedPath and search the router object if it exists, assign it to chosenHandler.   If not exists, handlers.notFound

if 'foo' is path, and router.foo exists, then it becomes the chosenHandler

then we assign all our extracted properties to ‘data’

data = all the stuff gotten

then we call chosen Handler, that is, we call router.sample() or router.notFound()

call chosenHandler passing in data and callbackfunction
callback function(statusCode, payload) { }

we pass the payload (data) and a function , called ‘callback’.  In router.x(), this callback is called, taking as arugments, the statusCode (406 or 404) and the payload {name: sample handler}.

We make sure that statusCode is a number, if not, we give it one: 200

We check the type of payload, if its an object (it is), it’s fine, if it isn’t, we assign one.

We “stringify” the object {name: samplehandler} so we can send it, 
In header, we set content-type (json) and write statusCode to Head
** what’s the difference between setHeader and writeHead ? 
And we end by sending the object 
Both statusCode and object logged. 


So could be – 

       res.writeHead(statusCode, {
                    "Content-Type": "application/json"
                })

response.setHeader() allows you only to set a singular header.
response.writeHead() will allow you to set pretty much everything about the response head including status code, content, and multiple headers.
Consider the API:
response.setHeader(name, value)
Sets a single header value for implicit headers. If this header already exists in the to-be-sent headers, its value will be replaced. Use an array of strings here if you need to send multiple headers with the same name.
var body = "hello world";
response.setHeader("Content-Length", body.length);
response.setHeader("Content-Type", "text/plain");
response.setHeader("Set-Cookie", "type=ninja");
response.status(200);
response.writeHead(statusCode, [reasonPhrase], [headers])
Sends a response header to the request. The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. Optionally one can give a human-readable reasonPhrase as the second argument.
var body = "hello world";
response.writeHead(200, {
    "Content-Length": body.length,
    "Content-Type": "text/plain",
    "Set-Cookie": "type=ninja"
});


 
  
Create a server.. 

Protocols – communication rules that two sides can agree to use – so server will have expectations to see X

IP address – this identifies a cpu on the web
Socket – this is a channel between two CPUS
Packets – what’s sent along sockets, using a protocol in TCP
Protocol – this is a set of conventions both computers will use to communicate, how to structure data, how to send it, read it, etc
Port – is an endpoint of communication at an IP address.  An IP has many of these.  Node.js listens on a particular port whereas our email server listens on another. 

A port is associated with an IP address of a host and the protocol type of the communication.

IP_address:port




Buffer – temp stroage spot for a chunk of data being sent somewhere
so we put pieces of data in a buffer,
when buffer is full, it passes down the stream
stream – the flow of data between two places
buffer: boat, stream: river, each buffer carries 8 pieces of payload

Stream - 


Client >>> Req >>> Server
might contain: query, params, headers, cookie

Client <<<<Res <<<< Server
you can sadd: new cookies 


res.write

Can be called multiple times to provide successive parts of the body.
Example
response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, World!</h1>');
response.write('</body>');
response.write('</html>');
response.end();



To clarify on res.write little bit more, this is a method provided by OutgoingMessage class from node http module. Express.js response class inherits OutgoingMessage class. Below is the definition of write method: OutgoingMessage.prototype.write = function write(chunk, encoding, callback) { return write_(this, chunk, encoding, callback, false); }; 

 Res.send – thi sis an express method
It is the same as res.write + res.end and auto assigns htttp header field.