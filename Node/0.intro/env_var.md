env_var

Digital Ocean

the environment - the area that shell builds each time that it starts a session that contains variables that define system properties.

How do you interact with this environment?

How do you read / set environmental and shell variables interactively and through configuration files?

We spawn a shell session, it compiles info from afiles and settings.. teh shell process gets / sets settings, passing these to child processes?

How to implement the enviroment? Via key-value pairs (keys can be env var or shell var). keys are in all caps.

env var - defined for the current shell and inherited by any child shell / process. used to pass info into processes that are spawned from teh shell.

shell var - these are contained only wihtin the shell in which they were set or defined - keep track of ephemeral data, like current working directory.

KEY=value1:value2:value3 (use quote if a value contains white spaces)

show a list of environmetnal variables:

printenv (or just 'env')

or see individual variables:

printenv SHELL

use 'env' to modify the envirnoment that the program runs in

env VAR1 = "blahblah"

this also allows your to pass on or override env vars of any child processes.

How to see the shell variables? This will show a list of all shell, env, local vars and shell functions. It's usually a short list.

set

For the short list:

set | less

without the shell functions:

(set -o posix; set)

mostly shell variables:

comm -23 <(set -o posix; set | sort) <(env | sort)

You can create a shell variable:

TEST_VAR='Hello World!'

Change it into an enviromental variable:

export TEST_VAR

If we want to set a new environmental variable:

export NEW_VAR="Test"

how to spawn a child shell? bash

How to close this shell? exit

from a child, you can try to print a specific variable:

echo \$TEST_VAR

Change an env var into a shell back:

export -n TEST_VAR

Completely unset any variable:

unset TEST_VAR

in bashrc:

PROMPT_COMMAND='[[ $PWD == "/foo/bar/" ]] && export FOO=BAR || unset FOO'

checks the PWD variable (working direcotry). If it is /foo/bar/, then it will export the variable

or

mycd()
{
cd $1
    if [ "$(pwd)" == "/your/folder/that/needs/env" ]; then
export RAILS_ENV=development
else
export RAILS_ENV=
fi;
}
alias cd=mycd

set Path in .bashrc file

export PATH=/usr/java/<JDK Directory>/bin:\$PATH

source .bashrc

but in ubuntu, we use etc/envirnoment file or .profile/?

if path already present, export is redundant.

source etc/env

~/.profile - sets env for current user only and not for all users of your computer
/etc/profile.d/ - global equivaelnt of each users personal ~/.profile
this will end in .sh

wait

etc
profile - a bash script w/ if then...

except profile and bash rc are read only

sudo -s // become super user

but what is superuser password on ubuntu??

also :

require('dotenv').config({ path: require('find-config')('.env') })

used this:

https://stackoverflow.com/questions/14462591/set-environmental-variables-in-a-particular-directory

if/then production:

https://alligator.io/nodejs/utilizing-npm-scripts-during-development/

https://help.ubuntu.com/community/EnvironmentVariables

https://www.digitalocean.com/community/tutorials/how-to-read-and-set-environmental-and-shell-variables-on-a-linux-vps

https://webpack.js.org/guides/environment-variables/

in azure???

https://medium.freecodecamp.org/heres-how-you-can-actually-use-node-environment-variables-8fdf98f53a0a

Can someone search my server container droplet and grab my api stuff?


Start app with NODE_ENV = envName node index.js
Put configuration in a file, config.js, which has a switch inside of it
Switch shold read process.env.NODE_ENV to determine the current environment and export only the config variables for tha tenvironment – 
Env option 2 – 
Pass each config variable to the node app when it starts… like dbpassword, apitoken, port, foo, etc
Env 3
Use a .env file which gets ignored by source control via gitnore
All configuration in .env file – 
Test inserts .env before test? 
Each dev would put their own .env file in the proejct prior to beginning local host work
Your deployment pipeline would insert an .env file into repo before it deploys