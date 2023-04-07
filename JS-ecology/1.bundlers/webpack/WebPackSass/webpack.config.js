var path = require("path");

var DIST_DIR   = path.join(__dirname, "dist"),
    CLIENT_DIR = path.join(__dirname, "src");

module.exports = {
// The base directory, an absolute path, for resolving entry points and loaders from configuration.
	context: CLIENT_DIR,
	// This is the entry point or start of our react applicaton
	entry: "./script.js",
  
	// The plain compiled JavaScript will be output into this file
	output: {
		path: DIST_DIR,
		filename: "bundle.js"
	},
  
	// This section desribes the transformations we will perform
	module: {
	  loaders: [

			// this is the babel loader: 
		{
		  // Only working with files that in in a .js or .jsx extension
		  test: /\.jsx?$/,
		  // Webpack will only process files in our app folder. This avoids processing
		  // node modules and server files unnecessarily
		  include: /app/,
		  loader: "babel",
		  query: {
			// These are the specific transformations we'll be using.
			presets: ["react", "es2015"]
		  }
		}, 
		// css loader
		{
			// first test for any files with a css extension using regex: 
			test: /\.scss$/,
			// identify the module - ! is pipe means use both at same time
			loader: 'style-loader!css-loader!sass-loader'
			// no presets because only putting css into dom

		}
	  ]
	},
	// This lets us debug our react code in chrome dev tools. Errors will have lines and file names
	// Without this the console says all errors are coming from just coming from bundle.js
	devtool: "eval-source-map"
  };