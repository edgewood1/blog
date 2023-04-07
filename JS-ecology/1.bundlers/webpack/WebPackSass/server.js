// Node.js path module is used for handling and transforming file paths.

var path = require("path"),

// express is a module used to organize your web app into MVC on server side - that is, it's a framework. 

    express = require("express");

// from the path module, the path.join() method joins two things into a filepath
// __dirname is a global variable that outputs the path relative to this file

    var DIST_DIR = path.join(__dirname, "dist"),
    PORT = 3000,

// here we assign a running instance of express to 'app'
    app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

// This gets the url, and if it matches "/",
// then it runs the callback, which sends the index.html file, 
/// located at DIST_DIR 

app.get("/", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

// this listens for connectons on the specified port - 
// it console.logs this fact 

app.listen(PORT, function() {
console.log('Running on http://' + PORT);
}
)