# Robo-board
Small react web app generating robot image based on arguments provided by user

# Running as docker container
Build image from Dockerfile
```
docker image build -t <image-name>:<tag> <docker-directory>
```
Running builded image (port 80 is a nginx port)
```
docker run -dp <local-port>:80 --name <container-name> <image-name>:<tag>
```

# Deploying on kubernetes cluster
```
kubectl apply -f nginx-pod.yaml -n default
```