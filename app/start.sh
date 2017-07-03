#!/bin/bash

sequelize db:migrate
pm2-docker ./bin/www
