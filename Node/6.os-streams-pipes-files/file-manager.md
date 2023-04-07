

 file descriptor is what’s returned by opening the file using the open() method offered by the fs module:


The open() callback function provides a file descriptor, fd for accessing the newly opened file


a file descriptor (FD, less frequently fildes) is an abstract indicator (handle) used to access a file or other input/outputresource, such as a pipe or network socket. 


Fs.read - This method will use file descriptor to read the file. If you want to read the file directly using the file name, then you should use another method available.

fd − This is the file descriptor returned by fs.open().



Node

Creating / Removing Directories

This reads from a pre-existing file called readMe.txt

Fs.mkdir(‘stuff’, function() {
   Fs.readfile(‘readMe.txt’, ‘utf8’, function(err, data) {
Fs.writeFile(‘./stuff/writeMe.txt’, data); 

You have to delete file then folder

Fs.unlink(‘./stuff/writeMe.txt’, function() {
Fs.rmdir(‘stuff’);