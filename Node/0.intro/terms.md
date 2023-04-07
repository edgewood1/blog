Machine code – what computers understand
High-level langauges – abstract away low-level operations, creating variables, etc
Compilers – take source code (like js) and turn it into machine code.  Create executables – programs ready to be run
Transpilers – take source code and turn it into another kind of source code
Interpreters – take source code and directly execute it by taking real time intermediate steps.  Compiling plus executing, but it doesn’t leave behind any artifacts like compilers do.
Assemblers - 
V8 engine – a type of javascript interpreter.  Compiles js down to machine code. Optimizes code to make it faster.  It’s.a standalone app but we interact with it via chrome only.  Other js engines: spidermonkey(firefox) chakra (IE) javascript core (ios, safari)
A browser looks at a js file and sends it to v8 so it gets executed.  Browsers are built on top of v8 engines
Like browsers, node sits on top of v8 engine. 
Node js is a server-side js  runtime environment
Server-side – app runs on os vs browser
Runtime environment – 
V8 is engine and node is rest of car,  you are the driver.
Node is a c++ application that embeds the v8js engine

Two main programs
A script processor – just type node index.js 
Passing a script name to node.js so node can open file and process that file, invoking the node program like this, node isn’t just goin gto pass the js to v8. It’s first going to initialize the process called event loop, and then process initial parts of js file, and then process event loop initialized earlier
Event loop is a continually checking if there’s any new tasks for node to do
Synchronous executed as soon as encountered

Asynch is invoked but not immediately completed, but added to a queue tha tlists everything left to do – the event loop is a way of processing this to do list. With each tick of loop it completes items on the list, but those items may create further items. 

Infinite loops – 
Items that can be added to the to do list is any task that shouldn’t be done synchronoulsy – callbacks, scheduled for later like timeouts.  This umbrella tasks are called non-blocking.  Nonblocking tasks get added to the todolist, and node processes them whenever it can.
Synchrnonous events are blocking events because it occupies resources of thread, and application must focus on that task at expense of whatever it is doing at the time.
Blocking tasks and runtimes with blocking io have their place – if you must perform a sequence of tasks in an exact order an dtheres nothing else your thread would rather be doing, then blocking io great, but usually not the case. 
Web apps need to handle / process many things at once.  Api fetches results and simultaneosuly sending welcome email to another user, and loking up twitter file of another and charging card of another. 

Node js is single threaded.  But it can spawn other threads…. But single for now.
It can only do one thing at a time. 
Non blocking io and event loop don’t allow node to do many things at once, but it allows node to schedule things later.  
Most apps are just waiting for things to do things, and while waiting they are blocked from doing anything else.  If created an api with blocking io without asynchronous, a post request comes in with info for new user to be written to db, parse request, gets users data, sends data to db, waits for db to respond.  While waiting, it is blocked.  It’s not doing anything.  Because it has a blocking io, It can’t do anything else. 
Non blocking io and eventloops are the answer.  It allows app to do other things. 
Send info to db, put item on todo list saying when db responds, process response, then node thread will move on to the next task on event list.  When db responds, the event loop will see the respond, and it has a to do list to send that response to this function here. 
Many node apis are designed asynch in this way. 
How does node run many files? 
When starting a node app, you specifiy only the “entry file” – usually index.js
Module system comes into play here.  Require or import statements.  Grabs content of one file an dassigns it to a variable. 
Modules often contain a module.exports – this makes the current file export something to another file. 
Nodes module system creates a dependcy tree, which tells node which files ar eneeded to run the application

Node’s script processor does – 
Reads in the file you specifiy
Reads it and all other files by traversing the depenency tree codified in those files
Then it begins to execute synchronous tasks in those files
Then it begins to execute all asynchronous tasks by repeating its event loop over and over until nothing left to do.  

Repl – read eval print loop – works like console in web browser.  Way to define and execute code against the v8 engine in real time.  Enter ‘node’ but don’t supply a filename, node will start the REPL automatically – then you can begin entering node / code. 
Then it waits for input for you
It starts the event loop in back ground and wait for you to write something
Write any statement you like in node / js
Line breaks within strings require escape with backslash – but rest is good
Define variables, manipulate them, define functions, execute, and do asynch processes – the repl stages moves from Reading input from me, Executing what is written, Printing response / return value / whatever, Loops back to the top (Reading) and begins again.