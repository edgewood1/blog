# Docker Installation

These instructions are presented as an alternative to installing MySQL directly onto your students' computers: it is included here because several students were unable to get MySQL installed on their local computers.  There is the added benefit that installing Docker opens up all kinds of possibilities with other databases, languages, and operating systems.

This is a more advanced option because it requires the use of a container technology [Docker](https://www.docker.com/).  Yes, introducing an additional layer of technology may mean that we are opening Pandora's box and letting out all sorts of new errors and obstacles.  However, the purpose of Docker is to _normalize the environment_.  Instead of trying to install MySQL on all variations of host machines (including Windows, Mac, and every possible variation of those operating systems that you will find in a classroom), we install the Docker virtual machine, and then we load up the _exact same_ MySQL image into it.  If your computer represents an angry ocean of unpredictable processes and permissions, Docker floats on top of it like a sturdy ship.  Instead of trying to install MySQL into the stormy waves of your desktop, we install it onto the deck of the ship.  You can think of the process something like putting a video game cartridge into a machine.  

> *CAREFUL:* It is not recommended to install both a native version and a Dockerized version of MySQL onto the same machine.  Doing so may result in port conflicts or other glitches that can be hard to troubleshoot.


## Install Docker

The specific product we are interested in is called "Docker Community Edition" (or "Docker CE" for short).  You may download it from the [Docker Store](https://store.docker.com/search?type=edition&offering=community).  Choose the installer for your computer's operating system (Mac or Windows).

You must create an account on the Docker Store before you can download Docker.  Choose a username and a password that you will remember (and store your password securely in a password management program).

For more information about installing onto your particular operating system, you can review the specific instructions: 

- https://docs.docker.com/docker-for-windows/install/
- https://docs.docker.com/docker-for-mac/


## Starting Docker

Once you have successfully installed Docker, it may take a few minutes to start up.  There is a menu icon (a picture of a whale with shipping containers on its back) -- you will need to ensure that the Docker app is running every time you want to use an image that runs inside of Docker (think: you have to power on your Nintendo if you want to play Super Mario Brothers).  You can set system preferences to ensure that it starts on startup.

## Installing 

You can browse the [Docker Hub](https://hub.docker.com/) to find images to install into your Docker VM.  This is a lot like an app store: people and organizations submit images for all kinds of applications and technologies that you can download and run.  We are going to download the officially sanctioned Dockerfile for MySQL: [https://hub.docker.com/_/mysql/](https://hub.docker.com/_/mysql/)

> Docker is a command-line tool -- although the GUI tools for it are getting better and better, you should prepare yourself for running these commands from the command-line.

Run the following command in your terminal:

```
docker pull mysql:5.7.22
```

This specifies that we want the `mysql` image, and specifically the one tagged as version `5.7.22`.  You can omit the colon and the tag, and the latest version of the image will be assumed.

> Note the "pull" command... it looks and acts a lot like Git!  We are pulling down a Docker image in the same way we pull down a repo.

Keep an eye on the terminal to watch the progress update.  If you are somewhere with a slow internet connection this may take a while.


## Running MySQL

When we run MySQL for the first time, we need to give our instance a name.  For simplicity, the name `virtual-mysql` is used in these examples and we will continue to reference version 5.7.22 of the `mysql` image.

The following command sets the password of the root user to `root`:

```
docker run --name virtual-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5.7.22
```

This is a long command!  You should save it!  Bookmark it!  Make an alias for it!  This is what you will need to run each time you need to start your virtual MySQL container instance.

### Errors

If you get an error like 

```
docker: Error response from daemon: Conflict. The container name "/virtual-mysql" is already in use by container "89f1f7d82a5aefc00a5a6522f5d01df3059e5b09975d75bde197a69c8471e5e3". You have to remove (or rename) that container to be able to reuse that name.
```

That means that your MySQL Docker container is already running!  No need to start it again!
 

## Connecting to MySQL using a Client

Once your MySQL instance is running inside of its Docker container, you should be able to connect to it using a MySQL client.  

- *host*: 127.0.0.1
- *user:* root
- *password:* root
- *port:* 3306



### Host File

This shouldn't be required, but just in case you want to refer to your dockerized container by its hostname ("virtual-mysql"), you may wish to add an entry to your host file to explicitly declare the mapping.  Map your hosname of "virtual-mysql" to your localhost IP address of `127.0.0.1`.  Add an entry to your hosts file like the following:

```
127.0.0.1 virtual-mysql
```

On a Mac, the hosts file is located at `/etc/hosts` and you will require admin privileges to edit it.
On Windows, the hosts file is located at `C:\Windows\System32\drivers\etc`


## Shutting Down MySQL

At the end of the day, you may wish to shut down your instance of MySQL.  You do this using the `docker stop` command and supplying the name of your container:

```
docker stop virtual-mysql
```
