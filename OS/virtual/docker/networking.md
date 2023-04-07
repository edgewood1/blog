container must link to host's  "network interface" 

vm exposes to the host machine , whcih can be accessed by teh container.

https://docs.docker.com/network/

network modes
- bridge - a container started by default is created inside this network (docker0)
- host
- null

through bridge, we can connect to container's exposed port 

containers have internal and external ports

these are mapped to each other

-p 808:8080

** use the --network_host flag in the build: 

docker build --network=host

1. kill docker container / image
2. create new image with above flag
3. add npm styles, etc... 
4. run container... 

---quotes

For a quick work around you can run all the containers with flag --net=host which means the docker containers will use the host network interface. more info on docker networking can be found here.


**Container network**

- programs in containers are isolated from the internet by default
- it offers private network so you can group containers together in a network yet isolated from rest of containers on computer
- you choosen who can connect to whom
- you can expose or publish a port to let connects in
- private networks to connect between containers

expose a port


internal port that the program is listening on
port listening on the outside. 

terminal 1 - create a server

- start server that accepts data from one client and passes it to another
(inner:outerport)
docker run -p (port#:connectedtoport#) -p (port1:port1) --name echo-server ubuntu:latest bash

once your in the bash terminal of an ubuntu os, run: 

net-cat utitilty a network debugging portramm for moving bits from one place to the next

nc -lp 45678 | nc -lp 45679
data passed in on one port and spit out on another port

terminal 2 - first client

nc localhost 45678

terminal three

nc localhost 45679

terminal 2, type "let's go"

this will go from  2 -1-3

how to get an image that runs netcap if don't have it locally

just run an ubuntu image, that has it.

host.docker.internal >> this refers to the machine hosting everyone

nc host.docker.internal 45678

in terminal 3 / run same container and run corresponding nc host... commmand

above we implicitly exposed port

if you want to run many ports, expose dymanically

leave off the host side of port definition, and docker will fill it in from one of the available ports

the port inside the container is fixed, the port on the host is chosen from the unusded ports,  this allows many containers running program with fixed ports


same as aobve but only one port per -p

nc -lp 45678 | nc -lp 45679

on other termianl: 

docker port echo-server // 3277

this tells you the assigned outer ports
hook up to these with other terminals using netcap

nc localhost 3277, etc... 

abov e is tcp, but you can use udp... 


____

docker bridge

1. ethernet port
2. IP Tables / NAT - Network address translation is a method of remapping one IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device.  Map a port on the host side to a port on the container side.  
3. Docker Bridge - handles communication between containers to host or between containers.
   1. containers... 

User defined bridges - prevents containers from talking to eachother unless they go through host

overlay networking - no NAT.  


docker network ls 

shows all networks

all containers are connected to work

the bridge is the means by which the container can talk to the external world.  
the bridge can be configured via the --net flag
there are four modes: 
The --net default mode
In this mode, the default bridge is used as the bridge for containers to connect to each other.

The --net=none mode
With this mode, the container created is truly isolated and cannot connect to the network.

The --net=container:$container2 mode
With this flag, the container created shares its network namespace with the container called $container2.

The --net=host mode
With this mode, the container created shares its network namespace with the host.








