
# Define your image directory

WORKDIR /a - begins with a slash, so it is the absolute path
WORKDIR b - lacks a slash, so it is a relative path. This is the same as /a/begins

# copy your files to the image

COPY . /a/ -- absolute path to a
COPY . b/ -- relative path to b
COPY . /a/b/ -- absolute path to b

If i have
/client/mobile1
/client/mobile2

WORKDIR /client/mobile

COPY . /client/

WORKDIR /client

COPY . /client
COPY . /client/mobile

will that create a client/mobile directory just like the original?

# what's teh difference between copy and add?



###

-------

build images with code 

dockerFile - small programs to create an image
run program

docker build -t name .

t means tag 
. > in current directory (place to find docker file)
else show path

when it finishes the result will be your local docker registry

each line takes the image from previous line and makes another image
the previous image is unchanged
it does not edit the state from prev line

see dockerfile reference

caching with each step

process you start on one line with not be running on the next line

ENV command  will be set on the next line

FROM busybox (name of image) // create image
RUN echo 'building simple docker image'// 
CMD  echo 'hello container'

docker build -t build .

each line above creates a container
which results in a final container
and the image for this is committed

syntax
from - starting point
maintainer - name and email 
run - run a command in this shell
add - add files or contents of tar archives and urls (things you download from a url)
env - set env var for duration of docker file and when running the result 
entrypoint - specifies the start of teh command to run / lets u tack more later.. 
cmd - specifies whole command to run 