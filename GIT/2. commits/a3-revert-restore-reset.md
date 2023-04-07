Break down

- 
- reset - update your branch, moving tip in order to add / remove commits from branch.  changes commit history.  can also be used to restore index.  
- Revert - creates a new commit that reverts changes from a previous commit

Three trees 

- the commit history (Head) - what is commited to history
- staging index - what is saved for commit
- working directory - what I see in VS code. 

RESTORE - doesn't change the branch

- working tree moved back to staging index
- workign tree moved back to the last commit

git restore .

- working tree moved back to a past commit
- staging index to a past commit

 

differences: https://stackoverflow.com/questions/58003030/what-is-git-restore-command-what-is-the-different-between-git-restore-and-git#:~:text=git%2Drestore%20is%20about%20restoring,the%20index%20from%20another%20commit.

 

An important note is that the index/cache/stage contains a list of ALL files under source control, even unchanged ones. 

**Undo push**

```
git push -f origin last_known_good_commit:branch_name
```



**REVERT** 

This is an undo.  

The `git revert` command is used for undoing changes to a repository's commit history

- feature: 1 > 2 > 3

our 3rd commit has an error, so: 

`git revert 3`

now, now the contents of 3 remains in history for examination, but is not included in further code.

a new commit "undoes" the code in 2 even while it preserves it in the history

- feature: 1 > 2 > 3> 4 (mirror of 2) 
- Thus, 3rd commit is not deleted.  



**COMPARISON**

- reset goes back to a previous state by removing subsequent commits.
- revert doesn't change project history - this is safe if commits already shared.
- reset only works backward from current commit BUT revert targets one commit at any point.



 

**RESET**

-  moves the head back into time / rewinds head in history. 

Undo last work



https://docs.gitlab.com/ee/topics/git/numerous_undo_possibilities_in_git/

**undo your commit but leave your files and your [index](https://git.wiki.kernel.org/index.php/WhatIsTheIndex)**:

```js
git reset --soft HEAD~1
```

**undo the commit but keep your changes**



```
git reset HEAD~1
```

**destroy commit C and also throw away any uncommitted changes**.



```
git reset --hard HEAD~1
```

**Undo staging, ie undo most recent local commit**



```
git reset HEAD~
```

```
`git reset HEAD~ <filename>`  
```

undo staged files

Undo `git add` for uncommitted changes with:

```
git reset <file>
```

That will remove the file from the current index (the "about to be committed" list) without changing anything else.

------

To unstage all changes for all files:

```
git reset
```

git restore --staged <file>

**git reset arg1 arg2 arg3**

**arg1**: flag ~ what kind of reset? 

--hard > delete commit from

- working
- staging
- repo

--mixed > delete commit from

- NOT working
- staging
- repo

--soft > delete commit from 

-  NOT working or staging
-  repo only 

**Arg2:** to what commit should we rewind? (use HEAD or specific commit)

HEAD-1 > refers to commit before the current revision (commit)

**Arg3:** a particular file

`git reset HEAD fix.txt`

- remove a single file from the staging area only

**Notes**

- if you reset to 3 commits ago, it will delete 2 and 1 and 0 commits ago.