switch users: 

su 

root - the hightest file system /root
root - superuser

sudo - use super user priv to do whatever. 

file
/etc/passwd -name, user id, directory
shadow - passwords
login.defs -  user ids
useradd - skeleton directory

create a user
sudo useradd
cat /etc/pswd 
bobx:x:1001 < groupid (1001)

set password
sudo passwd mel
--enter pw twice

sudo cat /etc/shadow - to see pw (second field)

ls /home
- each user gets a home directory
sud ls -la /home/bob > four files / skeleton files

delete user - 

sudo userdel bob // deletes user and keeps files

sudo userdel -r bob // deletes all

__give permissions to this folder__

sudo tail /var/log/auth.log

sudo vi /etc/ssh/sshd_config_

chmod 664 ~/.ssh/authorized_keys_

sudo service sshd restart

sudo apt install nginx

sudo service nginx start // start it

sudo chown -R $USER:$USER /var/www/

edit nginx
sudo ve /etc/nginx/sites-available/default
sudo service nginx reload

location / {
  proxy_pass http://127.0.0.1:3000/;
}

__sample setup__

__routine__

clone app

git clone https://github.com/ammezie/sample-nodejs-app.git

cd sample-nodejs-app
npm install

node index.js

sudo npm install -g pm2

pm2 start index.js

1- open new terminal (fresh, without sudo permission)
2- sudo chmod -R 777 /home/user1/.pm2 (gives permission to the .pm2 folder)
3- pm2 start index.js (Note that there is no sudo here)
4- pm2 save
5- pm2 startup
6- Restart your computer and check pm2 monit
7- It should list your index process now. If not, try from 1-5, 8, and then 6.
8- paste the command listed in step 5


update ubuntu

sudo apt-get update

sudo apt-autoremove

sudo apt-get upgrate

adduser mel

sudo usermod -aG sudo mel