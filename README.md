# Robo-board
Small react web app generating robot image based on arguments provided by user

# Running as docker container
Build image from Dockerfile
```
docker image build -t <image-name>:<tag> <docker-directory>
```
Running builded image (port 3000 is a react port)
```
docker run -dp <local-port>:3000 --name <container-name> <image-name>:<tag>
```