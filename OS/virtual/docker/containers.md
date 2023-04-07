# run the image; that is, create a "running" container
turns an image into a running container. 

docker run [flags] <name> [command]

[flags]

-ti / terminal interactive (a flag causes it to have a full terminal in the image so you can get formatting towers 
-t
-it > 
-d / detached mode / desgned to shut down right after entrypoint command 
--name [pickAname]
-p 8000:8000

[commands]

bash 

[examples] 

docker run -it newtest bash // run a non-running container bash to explore

docker run -d --name myapp4 -p 8000:8000 test

docker run -t -d centos

docker run -ti ubuntu:latest bash / this will run ubuntu:latest env and run the bash shell

__Docker ps__ shows all the running images

You can format vertical print using this flag: 

--format=$FORMAT (will show the ID)

  - what it shows? 
      ID - container id
      Image: that made it
      Commond: that’s running in it. 
      PORTS - 
      NAMES - a reference name


# run a command in a running container?

docker exec -it CONTAINER bash

\$ docker exec -d ubuntu_bash touch /tmp/execWorks

docker exec d3067 ls

docker exec d3067 sh -c "cd mobile && ls"

# list your containers

docker ps // lists all running containers
docker ps -a // lists all containers

docker run -it newtest bash

docker run -t -d --net=host cardio 

# start / stop a container

docker container stop <name>

docker container start <name>

# destroy all unused containers 

docker container prune



**running things in docker**

docker run --rm (runs, then deletes contain after)

-ti ubuntus sleep 5 // starts container, sleeps for 5 sec, stops

docker run -ti buntu bash -c "sleep 3; echo all done" // 2 commands that run after bash process begins.

-c // run various things

**how to leave something runnning in a container?**

docker run -d (detach - leave it running in background) -ti ubuntu bash  // this drops an id

new terminal: 

docker attach <names>  // this jumps into the container that's running

ctrl - p / contrl - q // detaches

**add a process to another container**

docker exec -ti <names> bash // this addds a new bash process (image) inside the other.

**how to manage a container?**

docker logs <names> // see errors

docker kill <names> // container goes to the stop state

docker rm <names> // remove old / stopped container >> this keeps things from getting bogged down.

docker ps -l --format=$FORMAT // what is teh last to exit? 

-- stop containers still exist until you explicitly remove them

**resource constraints**

- ability to enforce limits to how many resources a continer will use

- memory limits
    docker run --memory maximum-allowed-memory image-name command
- cpu limits
    docker run --cpu-shares (10 % of use -relative to other containers / cpu time limit so others can share rest)
- hardlimits
    docker run --cpu-quota  (hard limits - to limit it in general)
