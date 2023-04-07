
json not formatted

SyntaxError: Unexpected end of JSON input

readablestreams

In order to access the data from a ReadableStream you need to call one of the conversion methods (docs available here).

As an example:

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    // The response is a Response instance.
    // You parse the data into a useable format using `.json()`
    return response.json();
  }).then(function(data) {
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  });
EDIT: If your data return type is not JSON or you don't want JSON then use text()

As an example:

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response) {
    return response.text();
  }).then(function(data) {
    console.log(data); // this will be a string
  });


  respnse / request objects

  https://davidwalsh.name/fetch

  node

  https://howtonode.org/hello-node

  151


2
I met this error too but found out it is not related to the state of Response, the real problem is that you only can consume Response.json() once, if you are consuming it more than once, the error will happen.

like below:

    fetch('http://localhost:3000/movies').then(response =>{
    console.log(response);
    if(response.ok){
         console.log(response.json()); //first consume it in console.log
        return response.json(); //then consume it again, the error happens

    }
So the solution is to avoid consuming Response.json() more than once in then block.

share  edit  follow  flag 