# Example

...
ADD ./test2.js /client/mobile1/
dockerfile
client1

- mobile1
  -test.js
- mobile2
  -test.js
  mobile1

  - test2.js
    test2.js

- if you do the current layout,
- it creates a client1, mobile1, and mobile2 root folder

RUN node client1/mobile1/test

RUN node client1/mobile2/test

WORKDIR /client/mobile1/

RUN node test.js

docker run - used to manipulate an images in local host


RUN cd mobile/ && npm run serve -- --target https://cs-next-deploy-12

CMD ["npm" "run" "serve" "--" "--target https://cs-next-deploy-12"]


CARDIO SERVER
- run container
- enter using exec
- npm install on both levels
- mobile: 
  - npm uninstall node-sass && npm install node-sass
    - run styles


 