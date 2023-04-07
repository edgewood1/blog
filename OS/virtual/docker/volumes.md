Volumes -- virtual discs to store and share data

sharing data between container
w kinds: 
persistent - data there after container gone
ephemeral - data exists as long as being used by container

- not part of an image / used for local data only

shared folders with the host
sharing a single file into a container 
both similar

mkdir example
docker run -ti -v /path/to/example/folder:/path/withincontainerwhere folder can be found (/shared-folder/) ubuntu bash

inside contain ls /shared-folder/
touch shared-folder/my-data
exit 
ls example/ --> data will still be there

shared data between containers (epheremeral)

create a volumen not shared with host
docker run -ti -v /shared-data ubuntu bahs
echo hello > /shared-data/data-file
docker ps to get name
docker run -ti --volumes-from sick_hopper ubuntu bash

sick_hopper is the name of the machine that has the volumes I want to use. 

ls /shared-data

you'll see the data-file.  

opwn  2ES XONRinwe -- 

docker registries

pieces of software that manage and distribute images
upload and download and search images here. 
docker search ubuntu // this will show a lot
hub.docker.com // do a search here... 

docker pull debian:sid // pulls debian image

docker tag debian:side mel/test-image  // changes the name

docker push mel/test-image /// pushes file to docker 