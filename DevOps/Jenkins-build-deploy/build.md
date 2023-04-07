jenkins

__Build with parameters__

master depoy (pick server / base_snap / revert option)

master deploy revert (pick server / base_snap)

master deploy weekly cs-vv

master tag

====================

if cs-feature has 5.4, 
Run the master deploy jenkins script and revert to the 5.4 snapshot to make sure it's in a clean state. That will get 6.0 (latest build) on cs-feature

project master deploy / cs-feature / base.5.4 / revert yes

After that, if you want a feature branch deployed, the Feature Build Deploy Jenkins script should work

In jenkins, select: 

1. All Tabs
2. Feature Build Deploy
3. dropdown: build with parameters

on new 'build with parameters' page, input/select: 

branch: <enter branch name> 
build: All, Web, RestApi, none
server: <server to deploy on>

* branch
- Marcus or I would give you this
- a typical branch name: CSA-5305-study notes

* build
- select `web` if no changes were needed for the rest api; otherwise, select `all`

-----




cs-feature

network> engineering > development> builds> 5.3> 5.3.2rollup

copy rollup2 copy into csinstall 
cmd prompt

run command link

cardio server patcher application

