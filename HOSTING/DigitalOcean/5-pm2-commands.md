pm2

__Install latest version__

npm install pm2@latest -g

use command line to:
- start, 
- daemonize
- monitor your app 

__start__

$ pm2 start app.js

pm2 start app.js --name "roadie3"

__other examples__

$ pm2 start bashscript.sh
$ pm2 start python-app.py --watch
$ pm2 start binary-file -- --port 1520

__options to pass to CLI__  

# Specify an app name
--name <app_name>

# Watch and Restart app when files change
--watch

# Set memory threshold for app reload
--max-memory-restart <200MB>

# Specify log file
--log <log_path>

# Pass extra arguments to the script
-- arg1 arg2 arg3

# Delay between automatic restarts
--restart-delay <delay in ms>

# Prefix logs with time
--time

# Do not auto restart app
--no-autorestart

# Specify cron for forced restart
--cron <cron_pattern>

# Attach to application log
--no-daemon

__get more specifics:__

pm2 show 0

pm2 describ 0 // display info about specific processes

pm2 logs [--raw] // display all logs in streaming

pm2 stop all // stop all processes

PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin
PWD=/home/mel/apps/roadie3.com

__ecosystem__

pm2 restart ecosystem.config.js --update-env

__Managing processes: commands__


$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name

Instead of app_name you can pass:

- all to act on all processes
- id to act on a specific process id

__popular steps__

- stop monitoring: `pm2 stop roadie3`

- restart: `pm2 restart roadie3`

- delete: `pm2 delete roadie3`

__Check status, logs, metrics__

check running-app's status, logs, metrics and even get the online dashboard with pm2.io.

__List managed applications__
List the status of all application managed by PM2:

$ pm2 [list|ls|status]
https://i.imgur.com/LmRD3FN.png

pm2 list // as a table
pm2 jlist // as raw JSON
pm2 prettylist

__Display logs__

To display logs in realtime:

$ pm2 logs
To dig in older logs:

$ pm2 logs --lines 200
Terminal Based Dashboard
Here is a realtime dashboard that fits directly into your terminal:

$ pm2 monit

\*you can alos create a configuration file called process.yml

what does it mean to "scale app up by 2 workers?"