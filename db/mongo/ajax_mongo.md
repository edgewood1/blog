// makeRequest > get /all > db.notes.find({}, function (err, found) {...}
// onclick "#makeNew"> post /submit + data object (req.body)
// // >> db.notes.insert(req.body, function(err, saved) {})
// onclick "clearall"> get / clearall >>
// // app.get("/clearall", f(R, R) {db.notes.remove({}, f..)})
// onclick delete / get / delete + params
// // >> app.get("/delete/:id", f(r, r,) { db.notes.remove({\_id: mongojs.ObjectID(req.params.id)}, f)})
// onclick .dataTitle > get / find + params
// // > app.get("/find/:id", f(req, res) { db.notes.findOne({\_id: mongojs.ObjectId(req.params.id)}, func..)})
// onclick # update > post / update + params >
// // > app.post("/update/:id", f(r, r) { db.notes.update({\_id: mongojs.ObjectId(req.params.id)},
// // >> \$set{title: req.body.title, note: req.body.note.... })})

mongoose

1. Schema is a library in mongoose

var X = new Schema()

this takes an object with keys

- each key is field / column name
  it takes an object that includes
- type: String, Number, etc
- unique: true / false
- required: true / false / custom error msg

validations

match: [/.+@.+\..+/, "Please enter a valid e-mail address"]

validate: [
function(input) {
return input.length >= 6;
},
"Password should be longer."
]

2. custom methods?

X.methods.coolifier = function() {

this.username = this.username + "...the Coolest!";

return this.username;
};
\*\*\* username would be something defined in the model

3. Activate:

is "Y" the name of the collection?

var Y = mongoose.model("Y", X)

3. module.exports = Y

THEN IN SERVER JS

var mongoose = require("mongoose");

var Example = require("./exampleModel.js");

\*\*schemaexample is the collection?

mongoose.connect("mongodb://localhost/schemaexample", { useNewUrlParser: true });

var data = {
array: ["item1", "item2", "item3"],
boolean: false,
string:
"\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
number: 42
};

\*Example is the imported schema

app.post("/submit", function(req, res) {

var example = new Example(req.body);
example.coolifier();
example.makeCool();

Example.create(data)
.then(function(dbExample) {
console.log(dbExample);
})
.catch(function(err) {
console.log(err.message);
});

Mongo Review
db - has many collections
collection - table
document - row / an object
field - key / column

---

if you have a model alled User

on post you can take the input from req.body,
which is an object,

and this will use that to conform to your model:

var john = new User(req.body);

then you can save 'john'

User.create(john).then(function(x){...})

\*\*\* how does populate work?

TWO MODELS
A.

1. name

2. messages - references B

B

1. message

I can save a message to B, then to A, placing a "foreign key" into that row:

B.create({message: x}).then(function(y) {
return A.find({}, {\$push: messages: y.\_id}, {new: true}).then(function(z) {
res.json(z)
})

an example of a save

app.post("/articles/:id", function(req, res) {
// Create a new note and pass the req.body to the entry
db.Note.create(req.body)
.then(function(dbNote) {
// If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
// { new: true } tells the query that we want it to return the updated User -- it returns the original by default
// Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
return db.Article.findOneAndUpdate({ \_id: req.params.id }, { note: dbNote.\_id }, { new: true });
})
.then(function(dbArticle) {
// If we were able to successfully update an Article, send it back to the client
res.json(dbArticle);...

      get

app.get("/articles/:id", function(req, res) {
// Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
db.Article.findOne({ \_id: req.params.id })
// ..and populate all of the notes associated with it
.populate("note")
.then(function(dbArticle) {
// If we were able to successfully find an Article with the given id, send it back to the client
res.json(dbArticle);
})
