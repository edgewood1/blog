create 

1. mysql image

docker run --name=test-mysql mysql

remove same one if needed to

docker rm test-mysql

initialize db and specify pw option


attached mode, which means you can't do anything else: 
docker run --name=test-mysql --env="MYSQL_ROOT_PASSWORD=mypassword" mysql

docker run --name=test-mysql --env="MYSQL_ROOT_PASSWORD=mypassword" mysql

detached mode: 

docker run --detach --name=test-mysql --env="MYSQL_ROOT_PASSWORD=mypassword" mysql

get teh IP address of the container so we can access it: 

$ docker inspect test-mysql

    "IPAddress": "172.17.0.4",

add volumes and connect the docker port to the host port


$ docker run \
--detach \
--name=test-mysql \
--env="MYSQL_ROOT_PASSWORD=mypassword" \
--publish 6603:3306 \
--volume=/root/docker/test-mysql/conf.d:/etc/mysql/conf.d \
mysql