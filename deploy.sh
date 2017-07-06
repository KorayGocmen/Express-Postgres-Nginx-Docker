#!/bin/bash

# Remove API Docs
rm -rf apidoc

# Installing docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
apt-cache policy docker-ce
sudo apt-get install -y docker-ce

# Running Docker without sudo
sudo usermod -aG docker ${USER}
su - ${USER}
id -nG

# Installing docker-compose
sudo curl -o /usr/local/bin/docker-compose -L "https://github.com/docker/compose/releases/download/1.11.2/docker-compose-$(uname -s)-$(uname -m)"

# Running docker-compose without sudo
sudo chmod +x /usr/local/bin/docker-compose

# Check docker-compose
docker-compose -v

# Build images and run
cd app
bash run.sh build
