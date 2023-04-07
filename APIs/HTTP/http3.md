server.md

A server responds to HTTP requests and responds with a status code and content. 

HTTP enable any browser to talk with any web server.

An HTTP web server is a process running on your machine that: 
1. listens for requests on a specific TCP socket address (an IP address and a port number)
2. handles request

Top web servers

1. apache HTTP server
2. Nginx
3. Caddy

Steps

1. type in www.yahoo.com
  -- the domain name 'www.yahoo.com' is converted to an IP address via a database called a DNS.
  -- the IP address witll allow the HTTP message to arrive to the right machine. 
  but the machine has many ports, so which one is the server hooked to? 
  by default, port is 80 for http / 443 for https - otherwise you must explicitly specfiy: 
  yahoo.com/444  
2. broswer makes an HTTP request that will travel to yahoo's web server, which sends back page, which is rendered by your browser.
3. the yahoo machine recieve request has a web server running on it. 

1. I write an http message
2. message carries the destination TCP address consisting of an IP address and PORT.
3. 