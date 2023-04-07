**bash_profile / bashrc  / bash history**

`.bash_profile` is executed for login shells

When you login (type username and password) via console, either sitting at the machine, or remotely via ssh: `.bash_profile` is executed to configure your shell before the initial command prompt.

`.bashrc` is executed for interactive non-login shells.

But, if you’ve already logged into your machine and open a new terminal window (xterm) then `.bashrc` is executed before the window command prompt. `.bashrc` is also run when you start a new bash instance by typing `/bin/bash` in a terminal.

On OS X, Terminal by default runs a login shell every time, so this is a little different to most other systems, but you can configure that in the preferences.

- create custom commands in bash_profile (or both?)

**gitconfig, gitflow_export, gitignore_global**

zshrc / zsh_history

vscode

ssh

**Where are these found?**

1. Root - system, users, bin, home, usr
   1. users
      1. meldejesus
         1. .bashrc
         2. .bash_profile
         3. .bash_history
         4. .gitconfig
         5. .gitignore_globoal
         6. .gitflow_export
         7. .zsh_history
         8. .zshrc
         9. .vscode
         10. .ssh



