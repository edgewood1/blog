var message = require('./script2.js');
/// loads in css only needed for this script.
require ('./style.scss')
alert(message);

var colors = ['red', 'green', 'blue']

function print(val) {
  console.log(val)
}

colors.forEach(print)