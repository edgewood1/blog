Terms
A function in itself might be a small set of instructions, but it might not be a thread. 
A thread requires that a user interact with the program in order to do something – puruse a new course of action.  So the program being open and my typing into it represents one thread of control.  

Threads share the same address space
Each thread has own instruction sets, specfiic tasks, own stack memory, instruction pointer, only share address space, sharing global variables and memory space. 

Multithread – accomplishes many things almost at the same time.  But two set s of execution with own register and stack.  So independent.  

Multiprocesses / cpu cores (processors).  

 the CPU is shared among running processes or threads using a process scheduling algorithm that divides the CPU’s time and yields the illusion of parallel execution. The time given to each task is called a “time slice.” The switching back and forth between tasks happens so fast it is usually not perceptible. The terms parallelism (genuine simultaneous execution) and concurrency (interleaving of processes in time to give the appearance of simultaneous execution), distinguish between the two types of real or approximate simultaneous operation.


Concurrency – many lines on one task, many tasks
Paralelism – one line on one task, many tasks.

Register – a storage site / location - holds an instruction, storage process, or a piece of data
Counter / instruction pointer  – tells where it is in process.  A stack pointer. 
Stack – data type – stores info about the active subroutines of a computer program - a collection of elements, usually held in a register? 

Processes have their own addresses spaces. 

Unless they use a share interprocess communcation technique. 
1.	Thread –  a small set of instructions that can be executed.  A line of control coursing through the program.  A thread of control moving through.   A thread of execution.
a.	Single – only having one long chain of instructions
b.	Multi – having many chains of instructions processed at once
i.	These might conflict if two wants to read / write same data. 
2.	Process – an instance of an app and state fo all threads executing in the program.
3.	Concurrency – having multiple “workers” (threads?) processing a single chain.
a.	The last part might finish first, or last, and the result should be the same? 
4.	Parallelism – having multiple chains being processed by multiple “workers”
5.	Synchronous – one step ONLY after the next.
6.	Asynchronous – can skip steps and come back to those later
a.	Step 1 - get records
b.	Step 2 – do some math
c.	Step 3 – say goodbye
d.	Step 4 – when records appear give finish the math and send.  

What is a single-threaded application? 

A program (like Notepad.exe) is a passive collection os instructions stored on secondary memory or a disk.  When executed, the kernel reads it into primary memory and executed.  

A process is the actual execution of these instructions.  It is an instance of a computer program that is being executed.  

**When you double click on a notepad icon (execute it), a process is started that will run the notepad program.  This is an active entity, residing in primary memory.

A process could refer to: 
1.	Each instance of notepad running on cpu.  You could have 5 docs open. 
2.	A different application – you could have 1 instance of notepad and one of windows running.  

windows Task Manager shows a list of the various processes currently running on your computer. 

A thread is a chain of commands being processed.  

A single-thread implies one command must wait for the previous to finish.

Concurrent – running at same time / parallel
Concurrency – You have a single chain of commands.  thread1 runs through steps 1-3, thread 2 runs through steps 4-6, thread 1 finishes the steps. 
Parallel – You have two chains.  one thread runs through one chain while another runs through a second chain – advance is simultanesous

At the high level Node.js falls into the category of concurrent computation. This is a direct result of the single-threaded event loop being the backbone of a Node.js application.

A thread is a component / part of a process.  A process is made up of many threads.

Single-thread – processing of one command at a time.
Multi-threading - 

Several processes can execute concurrently, sharing resources like memory.

 A process can be made up of mulitple threads executing instructions concurrently

It’s the ability to process only one command ata time.  It is the oppoosite of multi-threading, which is the ability to execute many threads within the context of a single process. 

A thread is a “mini-process” – a “sequence stream” within a process

Threads shares the same address space, yet have own instruction set, own instruction pointer, own stack memory, own global memories. 

Word doc process:
Thread 1 – the OS takes user inputs
Thread 2 – the OS prints  a document
Both share memory of the process. 

 
JAVASCRIPT IS SINGLE THREADED, however, theres ASYNCH, which allows parallelism >

 Synchronous – porcess runs only asa result of some other process being completed or handing off operatios.  A file is sent, a response is sent with success or resend.  8**  it blocks a process til the operation completes.  In send/receive context, aoperation is completewhen messages delivered to reciever.  Or when prcoss finsihes executuion.  

Not every blocking operation is synchronous, and vv – I may send while people wait for other to receive, but if other has not received it, it is not synchronous.  

 

Asynchronous – two events that occur at different times – having to wait until the other is finished – so Consecutive, which is the opposite of concurrency.  They are not coordinated in time.  ** a process operates independnt of other processes. --- this is a non-blocking and only initaties the operation – the caller can discover completion by some othe rmechanism.  

Asyncrnous allows more parallellelism – it can do computation while messaage is in transite.  

Async – process can receive messages on many ports simultanesouly
Synch – fork different processes for each concurrent operation – yet costs extra process management. 

Asynch proclems – what if a message can’t be deliverred? Send may not wait for delivery of message and so not hear the error.  So we need a way to notify an asynch reciever that a message has arriveed.  

Node.js is a single-threaded application BUT it can support concurrency via EVENTS and CALLBACKS

Each API is ASYNCHRONOUS – that means they are non-blocking – 3 threads may be occuring at once – 

Because it is SINGLE-THREADED, it uses asynch function calls to maintain concurrency.  

Node thread keeps an event loop and when a task gets completed, it fires the corresponding event w hich signals the eventlistener function to execute. 

When node begins, it initiates variables and functions, then waits for events to occur.

There is a main loop that listens for evetns, and then triggers a callback function when one of those events are detected.  

1.	Event


An event – things like moving the mouse, clicking, etc. 
An event handler – this is a detecting process.   – it listens for an event to happen, when it does, it directs the flow to the call back.  So, event handlers control callbacks.

The event manager is told: push button, fire callback

Callback – a function passed to a procedure, to be “called” or “used” (like, shared) at some point in that procedure. 

An event handler is a procedure called when an event happens. ... An event handler is a type of callback. It's called whenever an event occurs. The term is usually used in terms of user interfaces where events are things like moving the mouse, clicking something and so on.

1.	Callbacks are called when an asynch function returns its result
2.	Event handling works on the observer / listener pattern.  When an event gets fired, its listener function starts executing.
