<h1 align="center">
Express-Postgres-Nginx-Docker
</h1>
<div align="center">
  <img width="70%" height="auto" src="http://www.koraygocmen.com/images/E_P_N_D.png"></img>
</div>

## Dependencies:
### Install Docker
```
[Docker] https://www.docker.com/ 
```
---
## Running the app:
### First Time:
#### *Builds the app and starts all the containers*
```shell
$ bash run.sh build
```
### Running:
*Runs all the containers*
```shell
$ bash run.sh run
```
### Recreate Apidocs
#### *Recreates apidocs from the controllers under `/routes`*
```shell
$ bash run.sh apidoc
```
### Run Dev Server
#### *Runs the database container and one app instance*
```shell
$ bash run.sh dev
```
---

## Deploying to Digital Ocean
### You only need to run three commands on the droplet you create

```
$ git clone https://github.com/KorayGocmen/Express-Postgres-Nginx-Docker.git app
$ cd app
$ bash deploy.sh
```
---

- App containers do not start with `npm start`, they start with `pm2-docker start` 
- Migrations are runned automatically by starting the app `sequelize db:migrate`

---
> ### *by Koray Gocmen*
