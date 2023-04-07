__key files__

for me, git-config-local = git config-global


__local__

my-code/.git/config - local config for specific repository

    created by `git init`

    to see: git config --list

    set config for just your local git / directory

    git config user.name "Your Name"
    git config user.email "youremail@yourdomain.com"

    looks like this: 

    [core]
        repositoryformatversion = 0
        filemode = true
        bare = false
        logallrefupdates = true
        ignorecase = true
        precomposeunicode = true

    after adding user name: 

    [user]
        name = test

__global__
~/.gitconfig - global git config file holding username, etc


[user]
        name = Mel DeJesus
        email = meldejesus22@epiphanyhd.com
[core]
        editor = vscode --wait
[color]
        ui = true
[includeIf "gitdir:~/work/"]
    path = ~/work/.gitconfig


    You can also set global: 

      git config --global user.name "Your Name"
      git config --global user.email "youremail@yourdomain.com"

~/.ssh/config - this store rmeote IP addresses, usernames, ports, etc



~/.ssh files
- specific keys
- config

git config -l

2 user names / emails
remote - edgewood
