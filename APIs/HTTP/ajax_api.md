THREE WAYS OF GET / POST VIA JQUERY 

ajax

This method offers more control over HTTP headers, error-handling, etc.  It offers direct access to XHR-object.  You can specify ajax options, like cache:true.

You can use this for GET or POST.

You have to deal with the returned data yourself via a callback?? Is this true?


$.ajax({
  type: 'GET' //?
  url: url,
  data: {name: 'mel'}
  success: success, // this is a function name
  error: handle_error
  dataType: JSON? 
});

// with callback

 $.ajax({
url: "demo_test.txt", 
success: function(result){
        $("#div1").html(result);
    }});


GET

GET is basically used for just getting (retrieving) some data from the server. Note: The GET method may return cached data.
This is the short version of $.ajax, abstracting configurations.  
It returns data to a callback
It only allows GET so must use a separate method for POST 

$.get(URL,callback);

$("button").click(function(){
    $.get("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
});

You can also send data via get as a query string

  $.get("/api/data/one/id?place="+place+"&theme="+theme, function (data) {
        console.log(data);

which would be recieved by a parameter (:id), which is stored as a property in params

router.get("/data/one/:id", function(req, res) {
     var id = req.params.id; // gives an object {theme: x, place:y} - what comes after the question mark
     var next = req.params  // what comes before the question mark
}

** difference

case 1

var data = {msg: 'hello};
data = JSON.stringify(data);
case 0
  $.get('/specific/'+data  , function(data) {
      console.log(data)
    })
case 1
  $.get('/specific/user?' + data, function(data) {
      ...
    })
case 2
    $.get('/specific/user?id='data  , function(data) {
      ...
    })
  
  router.get('/specific/:id', function(req, res) {
    console.log('params - ', req.params.id) 
    // case 0 - {"name":"helllo","place":"hello"}
      // case 1 - user
      // case 2 = user
    console.log('query - ', req.query); // {}
      // case0 = {}
      // case 1 - { '{"name":"helllo","place":"hello"}': '' }
      // case 2 - { id: '{"name":"helllo","place":"hello"}' }
    res.end()
})



  router.get('/specific/:id', function(req, res) {
    console.log('params - ', req.params.id) // user
    console.log('query - ', req.query); // {id:4}
    res.end()
})

Params are used for the self defined parameter for receiving request, something like (example):

Suppose you have defined your route name like this:

https://localhost:3000/user/:userid
which will become:

https://localhost:3000/user/5896544
Here, if you will print: request.params

{
userId : 5896544
}
so

request.params.userId = 5896544

so request.params is an object containing properties to the named route

and request.query comes from query parameters in the URL eg:

https://localhost:3000/user?userId=5896544 
request.query

{

userId: 5896544

}
so

the URL query parameters (after the ? in the URL).

You can also use req.param(name) to look up a parameter in both places (as well as req.body), but this method is now deprecated.

Post

POST can also be used to get some data from the server. However, the POST method NEVER caches data, and is often used to send data along with the request.

$.post(target, post_data, function(response) { });


  $.post("demo_test.asp", function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });

1.	Load
a.	Loads a piece of html into a container DOM
b.	Similar to get, but allows you to define where in the doc the returned data is to be inserted – tied to a DOM element, so: $('#divWantingContent').load(...)
c.	If data parameter supplied, will do both get and post
d.	Mostly used when call will result in HTML
Example: pass arrays of data to the server (POST request)
$( "#objectID" ).load( "test.php", { "choices[]": [ "Jon", "Susan" ] } )
$(*selector*).load(target, post_data, function(response) { });
