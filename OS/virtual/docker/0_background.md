A droplet is a virtual server and a VM

A virtual server is an off-site server with shared resources

A vs operates in a multi-tenant environment - so many VMs run on the same physical hardware.

Vs is a way of server hosting using VM.


Can containers and VM work together?

- docker can run on a VM too 
- if networked right, docker can interact with a VM 
- Kubernetes orchestrates containers.  Docker uses this.  

VM uses a hypervisor - software running the OS
Docker uses a docker daemon instead, running its images... 
 
https://www.youtube.com/watch?v=pGYAg7TMmp0


Docker has two parts
1. Client
2. Server, which runs a virtual machine

image - a file with paired down OS + 

Commands

Exit - leave a container
Docker images - see all images

What is shown on 'docker image': 
- Repo - where it comes from
- Tag - version
- Image id - a reference

* Refer to its by repo-tag or imageId

Lessons

don't let your containers fetch dependencies when they start
instead make containers contain dependencies themselves

don't leave important things in unnamed stopped containers - because you'll delete a seemingly unimportant containers.. 


- hyperV is a kind of VM 
- networking for developers on youtube
- cloud basics
- 

virtualization
- os only runs on specific kind of hardware - it seeks it out as an input
- you can run software that mocks the hardware, so that the os runs on it. 
- virtualization layer talks to hardware to get what's needed for the OS

What makes things different from VM

- On a VM, I can add files, and when I reboot, they are still there.
- An image is fixed. Like a snapshot. I can add files to a container, but if i create a second container from original image, the file won't be in it.  