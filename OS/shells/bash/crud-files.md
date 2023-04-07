bash

**CREATE**

touch file
mkdir folder

**READ**

cat file

**DELETE**

remove all contents of a folder

rm /path/to/directory

**recursive remove**

the '-r' flag also removes sub directories/files and prompt you for each

**force remove**

add '-rf' flag to skip prompts

add an _ to the end if you want to keep the folder but just remove contents
above, but also preserve interior folders: rm -f /path/to/{_,.\*}

 **UPDATE**

copy a file / make a backup

cp /source /destination

rename a file

mv /original /newName
