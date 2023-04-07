Webpack on the other hand was developed to handle creating complex pipelines of source transformations before publishing.

We get static checking for our code as well as better intellisense for the editor.

static content (vs dynamic) - Static content is any content that can be delivered to an end user without having to be generated, modified, or processed.  images, js, css

webpack bundles these into a dependcy graph.  it lets you use require() on local static sassets (non-js files? )

babel expands on the typescript compiler.  ts lets you set a target of es5 or es6 but babel allows for babel-preset-env. plus babbel can handle jsx, flow, extc - lots of plugins.  also the babel-plugin-macros