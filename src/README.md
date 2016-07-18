**koapitest**
====

Hello !
----

This is my first ever REST api built with NodeJs and koa, there is still a looooot that could be done, because I'm still learning stuff out!

There is already some things done with movies in there so *BE CAUTIOUS* !

Requirements
----
- npm
- nodemon *(optional)*
- knex cli

Installation
----

- Clone the repository or download it. *(Well that was obvious.)*
- Run npm
```
npm install
```
- Change the config files for each environment in the config folder.
- *(Optional)* Run the migrations or delete them.
```
knex migrate:latest
```
- **RUN THINGS**

In development env if you have nodemonde instaled:
```
npm test
```
In production env
