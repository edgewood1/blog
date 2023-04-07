
__API Layers__

Biz Logic/Domain - core part related to business rules / needs;

- a need: add a new customer to database. 
- the logic: recieve input from front end, do validations, and insert data on db, and return a result telling if action was succesful
- this layer contains services, a piece of code that implements a specific need, like `service USER_SERVICE`

HTTP/Controller Layer - a way to expose and allow a third party application (a front end app or IOT device) to do transactions, execute tasks, change data in your system

- here, we handle requests / response payload, auth, validation, cache, etc. 
- here, we recieve and handle requests, process the operation, and return the result
- contains API routes, middlewares, controller methods.



Related concepts

- **HTTP Protocol:** Is really important to understand this before jumping to web API implementation. What status code should you use?
- **REST Principle:** How to semantically structure your routes, http methods and status code?
- Cache, Security, Middleware, Validation,  Swashbuckler?









 

 