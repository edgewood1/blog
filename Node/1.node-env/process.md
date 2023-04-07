What is process? 

Two fundamental objects in Node
The global object is somewhat similar to the global object in the browser, with some very major differences. 
The process object (Node only)-  provides information about the runtime environment. In addition, standard input/ output (I/ O) occurs through process, you can gracefully terminate a Node application, and you can even signal when the Node event loop  has finished a cycle.

Process object contains
Properties – strings, numbers, objects, arrays
Methods – exit, on, kill

https://visionmedia.github.io/masteringnode/book.html

process.env is an object containing the user's environment variables

An environment variable is a dynamic-named value (an editable value) that can affect the way running processes will behave on a computer.
They are part of the environment in which a process runs. For example, a running process can query the value of the TEMP environment variable to discover a suitable location to store temporary files, or the HOME or USERPROFILE variable to find the directory structure owned by the user running the process.
Environment variables help programs know what directory to install files in, where to store temporary files, and where to find user profilesettings. They help shape the environment in which programs run on your computer.


So when the node.api is running, it refers to these variables that direct some of the api’s functionality.

In a shell, we can set variables and tehn run a command.  Variables can be set by prepending them to a command: 
FOO=bar somecommand someargs
Shell Grammar, Simple Commands (emphasis added):
A simple command is a sequence of optional variable assignments followed by blank-separated words and redirections, and terminated by a control operator. The first wordspecifies the command to be executed, and is passed as argument zero. The remaining words are passed as arguments to the invoked command.
man bash
ENVIRONMENT
[...] The environment for any simple command or function may be augmented temporarily by prefixing it with parameter assignments, as described above in PARAMETERS. These assignment statements affect only the environment seen by that command.
 you can call or invoke a program and for that invocation only use a variable with a particular variable.
This is a possiblity, but less poopular: 

export NODE_ENV=production


 
Node is invoked at the command line. 
Options: -p for print -v for versions
Script.js: the script you’re running
Arguments: 
Usage: 

[set environmental variables?] node [options] [ -e script | script.js ] [arguments]         
node debug script.js [arguments]

Arguments are stored in process.argv, which is nan array.  The first element is ‘node’, the second, script.js, the next, additional command line arguments.

Process object contains a number of properties, such as PWD, PATH, USER, SHELL, TERM_PROGRAM, HOME…. 

The user types in 

Node index.js --- port 3000
	This doesn’t add a NODE_ENV, so process.env.NODE_ENV = undefined
	It just runs the program.
NODE_ENV=staging node index.js	This adds the variable to process.env, so proces.env.NODE_ENV = “staging”
	Then, it runs the program.
NODE_ENV=production node index.js
	This adds the variable to process.env, so proces.env.NODE_ENV = “production”
	Then, it runs the program.
We set the env variable when running index.js
In running index.js, the server.list function checks config.js to get port and env (since this depends on how we’re running our app
First check: Config.js will first check the CurrentEnviornemtn.  To do this: 
Is process.env.NODE_ENV present as a string? 
Yes – make sure its all lower case and assign to currentEnvironment
No –  currentEnvironment will be assigned an ‘ ‘
So now, currentEnvironements will either be equal to: 
‘ ‘
‘staging’ or ‘production’
‘saturn’ or some other nonsense word
Second Check: append currentEnvironemtns to enviorments to make: enviornements.currentEvnvironments
If environment[I, ii, ii] is an object (it exists in this code), then it will be the environment we export, 
If not, make the ewe “staging” ( I or iii )