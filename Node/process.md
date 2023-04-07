nano

nano - opens

**Process**


process.argv - shows arguments in array

- absolute path to node
- absolute path to executed file

adding arguments a + b

node helloworld a b

get all items from 2 +

console.log(process.argv.slice(2));

environmental variables - available to all running processes for configuration or state purposes

process.env - an object that contains all env vars

console.log(process.env["HOME"]);

node 

hello.js
node hello.js
node hello.js 2 4 / pass in 2 args
process.arv / returns an array with node-dir, pwd, 2, 4
process.argv.slice(2) - returns args
process.env = a long object inc. user, pwd, agent pid, shell location
process.env['HOME'] a speciic prop
process.env[process.argv.slice[0]] // assigns first arg to ? 