bash 

How do I test if a variable is a number in Bash?

What you've written actually almost works (it would work if all the variables were numbers), but it's not an idiomatic way at all.

(…) parentheses indicate a subshell. What's inside them isn't an expression like in many other languages. It's a list of commands (just like outside parentheses). These commands are executed in a separate subprocess, so any redirection, assignment, etc. performed inside the parentheses has no effect outside the parentheses.
With a leading dollar sign, $(…) is a command substitution: there is a command inside the parentheses, and the output from the command is used as part of the command line (after extra expansions unless the substitution is between double quotes, but that's another story).
{ … } braces are like parentheses in that they group commands, but they only influence parsing, not grouping. The program x=2; { x=4; }; echo $x prints 4, whereas x=2; (x=4); echo $x prints 2. (Also braces require spaces around them and a semicolon before closing, whereas parentheses don't. That's just a syntax quirk.)
With a leading dollar sign, ${VAR} is a parameter expansion, expanding to the value of a variable, with possible extra transformations.
((…)) double parentheses surround an arithmetic instruction, that is, a computation on integers, with a syntax resembling other programming languages. This syntax is mostly used for assignments and in conditionals.
The same syntax is used in arithmetic expressions $((…)), which expand to the integer value of the expression.
[[ … ]] double brackets surround conditional expressions. Conditional expressions are mostly built on operators such as -n $variable to test if a variable is empty and -e $file to test if a file exists. There are also string equality operators: "$string1" == "$string2" (beware that the right-hand side is a pattern, e.g. [[ $foo == a* ]] tests if $foo starts with a while [[ $foo == "a*" ]] tests if $foo is exactly a*), and the familiar !, && and || operators for negation, conjunction and disjunction as well as parentheses for grouping. Note that you need a space around each operator (e.g. [[ "$x" == "$y" ]], not [[ "$x"=="$y" ]]), and a space or a character like ; both inside and outside the brackets (e.g. [[ -n $foo ]], not [[-n $foo]]).
[ … ] single brackets are an alternate form of conditional expressions with more quirks (but older and more portable). Don't write any for now; start worrying about them when you find scripts that contain them.
This is the idiomatic way to write your test in bash:

if [[ $varA == 1 && ($varB == "t1" || $varC == "t2") ]]; then
If you need portability to other shells, this would be the way (note the additional quoting and the separate sets of brackets around each individual test, and the use of the traditional = operator rather than the ksh/bash/zsh == variant):

if [ "$varA" = 1 ] && { [ "$varB" = "t1" ] || [ "$varC" = "t2" ]; }; then
