1. install packages

```js
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack --save-dev
npm install webpack-cli --save-dev
```


2. create a source folder with js

`src/browser.js`

1. in package.json, add a build script: 

 `"build": "webpack"`

 4. create webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/browser.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

entry is starting file / output.filename is what this file will become

