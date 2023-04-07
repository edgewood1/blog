// global

var january = function(cb) {
  var x = cb(10,20)
}; 
var december = function(cb) {
  var x = cb(100, 200); 
}

// create a dictionary associating a path with a function

var router = {
  home: january, 
  library: december
}


// user enters a path
var path = "library";

// find corresponding function in dictionary
var chosenHandler = router[path]

// call the function
chosenHandler(function(x, y) {
  console.log(x)
  return x + y
})
