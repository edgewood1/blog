
Two builds: development and production

The development build is used - as the name suggests - for development reasons. You have Source Maps, debugging and often times hot reloading ability in those builds.

The production build, on the other hand, runs in production mode which means this is the code running on your client's machine. The production build runs uglify and builds your source files into one or multiple minimized files. It also extracts CSS and images and of course any other sources you're loading with Webpack. There's also no source maps or hot reloading included.

What specifically separates production from development is dependent on your preferences and requirements, which means it pretty much depends on what you write in your Webpack configuration.

The webpack-production documentation is very straight-forward. Also, the article Webpack 3 + React — Production build tips describes the process of creating production builds for React with Webpack pretty good.

https://webpack.js.org/guides/production/

3 environments: development / stage / production


https://dev.to/flippedcoding/difference-between-development-stage-and-production-d0p


Environment variables - 

- http port 
- path and folder your files are located in - 
- a particular db your might be targeting

`const port = process.env.PORT;
console.log(`Your port is ${port}`);`

env variables need to be passed in via the command line or .env files

PORT=8626 node server.js
PORT=8626 NODE_ENV=development node server.js

or
NODE_ENV=development
PORT=8626
# Set your database/API connection information here
API_KEY=**************************
API_URL=**************************

- add to .gitignore


https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786

