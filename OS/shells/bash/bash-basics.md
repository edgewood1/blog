


filepermissions

owner-group-others

digiit adds: 
4 - read / 2- write / 1 - execute

755 means rwx for owner, rx for both others.

combine commands 

same line comamands - use semicolons between

&& - code placed after this will only run if previous command completes successfully

|| - continues if previous commands fail

create video folder only if cd command s fails

cd~/videos || mkdir ~/videos

navigation

cntrl-
a - move caret to start
e- to end
k - deletes all characters after
u - all characters in front of the caret
L - clears screen 
c - cancel

less - pagination

directing output

instead of printing to conosle
output of command could go into a file

x > y

pipe

pass output to another command

x | y

grep 
- searches


example - find all pdfs and output them using less

ls | grep ".pdf" | less