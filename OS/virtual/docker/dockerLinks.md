docker

https://blogs.umass.edu/Techbytes/2018/10/09/what-is-docker-and-how-does-it-work/

https://vsupalov.com/database-in-docker/

google:

problems with docker

can docker and vm work together

tutorial

https://diveintodocker.com/?utm_source=nj&utm_medium=youtube&utm_campaign=virtual-machines-vs-docker-containers

You can run a script, or a more complex parameter to the RUN. Here is an example from a Dockerfile I've downloaded to look at previously:

RUN cd /opt && unzip treeio.zip && mv treeio-master treeio && \
 rm -f treeio.zip && cd treeio && pip install -r requirements.pip

Because of the use of '&&', it will only get to the final 'pip install' command if all the previous commands have succeeded.

google

docker exec multiple commands

docker localhost didn’t send any data. ERR_EMPTY_RESPONSE

pm WARN saveError ENOENT: no such file or directory, open '/client/mobile2/package.json'

mulitple package.json files in one container

https://stackoverflow.com/questions/56244081/how-to-change-file-path-for-package-json-in-docker

https://stackoverflow.com/questions/37415134/error-node-sass-does-not-yet-support-your-current-environment-windows-64-bit-w

sends info to VM
but has no way to handle?

what i did

create a container that opens to bash

navigate to mobile and run npm start

OR

we can just run

cheat sheet

https://github.com/wsargent/docker-cheat-sheet
