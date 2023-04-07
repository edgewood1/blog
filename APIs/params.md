/endpoint can take additional ----

- Parameter: `?page=1` - use if its the content of the request itselfe.g, the product id, or image size. part of URL
- body
- header - use if its infoabout the request or client; metadata about the request.  this is in the HTTP message (not the URL
- Query 



mysite.com/{api-key}/users/{userId}/rewards



HTTP Message

- request or response

HTTP request

- url (endpoint + parameters) + http-method
- http-headers





So basically a request is something like:

```
POST /cgi-bin/process.cgi?tag=networking&order=newest HTTP/1.1
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: www.tutorialspoint.com
Content-Type: text/xml; charset=utf-8
Content-Length: 60
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive

first=Zara&last=Ali
```

The query params are within the URL. HTTP Headers are NOT part of the URL. They're part of the HTTP Message. In the above example, **query params** is `tag=networking&order=newest`, the headers are:

```
User-Agent: Mozilla/4.0 (compatible; MSIE5.01; Windows NT)
Host: www.tutorialspoint.com
Content-Type: text/xml; charset=utf-8
Content-Length: 60
Accept-Language: en-us
Accept-Encoding: gzip, deflate
Connection: Keep-Alive
```



Swagger terms

An operation may have  various parameters (body, path, query, header).

- body parameter (request body) - The POST, PUT and PATCH requests can have the request body (payload), such as JSON or XML data. There can be only one body parameter, 
- path parameter - /users/{id}
- query parameter - /users?role=admin
- Header parameter - X-MyHeader: Value
- cookie parameter - passed to the the Cookie header; Cookie: debug=0; csrftoken=BUSe35dohU3O1MZvDCU

https://swagger.io/docs/specification/describing-parameters/

**path vs query params**

427



Best practice for RESTful API design is that path params are used to identify a specific resource or resources, while query parameters are used to sort/filter those resources.

Here's an example. Suppose you are implementing RESTful API endpoints for an entity called Car. You would structure your endpoints like this:

GET `/cars`
GET `/cars/:id`
POST `/cars`
PUT `/cars/:id`
DELETE `/cars/:id`

This way you are only using path parameters when you are specifying which resource to fetch, but this does not sort/filter the resources in any way.

Now suppose you wanted to add the capability to filter the cars by color in your GET requests. Because color is not a resource (it is a property of a resource), you could add a query parameter that does this. You would add that query parameter to your **GET `/cars`** request like this:

GET `/cars?color=blue`

This endpoint would be implemented so that only blue cars would be returned.

As far as syntax is concerned, your URL names should be all lowercase. If you have an entity name that is generally two words in English, you would use a hyphen to separate the words, not camel case.

Ex. `/two-words`
