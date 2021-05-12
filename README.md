# Shopping Mall
(The goal...)

## How to start   
`git`, `nodejs` and `npm` installation are required.

### Frontend 
1. `npm install` (at the client folder)
2. `node app.js` (-> Frontend server running)

### Backend
1. `npm install` (at the server folder)
2. `npm run-script dev` (-> Backend server running)

Tip: `typescript` and `ts-node` need to be installed global to use it at the command

## Git branch rules
- main: For prod version. 
- release: For dev version.

Only `main` branch version must be working at Cloud(EC2). `release` version and any other branch's version should be developed in the local because EC2 has a limit of 750 hours per 1 month. So we should minimize the use of the server.

## Schedule
- May: Complete backend 
- June: Complete frontend  

(To be changed in detail...)

## Ground rules
(To be continued...)