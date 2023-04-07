Load an image on a virtual box

Both provide isolated environments.  

Docker – a container is an isolated set of processes running from an image that provides it with files.  The containers share the host OS kernel.  Used to isolate individual applications.  Smaller and faster. – better for dev cycles and microservices.  Yet they don’t do true vitualization – you can’t run a windows container on a linux host? Easy to change. Share the same kernel with the host os but comes with a larger surface for possible attackers… to hack.  

Apartment that has shared plumbing and faciliteis with its surrounding apartments

VM – consists of user space + kernel space of an OS.  – used to isolate entire systems.  Uses hypervisors.  A full system.  A VM doesn’t interact with the HOST OS – there is a “hypervisor” layer between them.  The machine is running its own guestOS and several applications within it. 

Houses that has its own plumbing

OR 

Implement Dcker using a virtualmachine.  

https://www.freecodecamp.org/news/comprehensive-introductory-guide-to-docker-vms-and-containers-4e42a13ee103/
nested containers

https://medium.com/@peorth/using-docker-with-virtualbox-and-windows-10-b351e7a34adc

