### vuejs express webpack mongodb socket-io chess-game

Prerequirements:  "mongoose": "^4.9.0" node 10 mongodb 4.0

#### Mongo
**Start up mongo initially**
> $ docker run --name mongo -v "$PWD"/mongo/data:/data/db -p 27017:27017 -d mongo
mongo:27017 is address of mongo in docker

**Command to build app image from Dockerfile in Server dir**
> $docker build -t vue-chess .

**Start nodejs application docker container**  
 > $ docker run -d --name node-app --link mongo:mongo -p 3311:3311 vue-chess

**Serve Static Files in NodeJS using NGINX in server/public dir**   
 > $ docker run -d --name web -p 8080:80 -v $(pwd)/.:/var/www -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf --link node-app:node-app nginx


#### Minikube

**Commands**  
> $ minikube status  
if profile not found - run minikube start  
> $ kubectl cluster-info  
> $ kubectl get nodes  
> $ kubectl version --short  
> $ kubectl get pods -A  
or   
> $ kubectl get pods  

**Cluster creation**  
> $ kubectl apply -f kube  
>  kubectl get pods  
>  kubectl get svc  
**Get vue-chess service address**  
> $ minikube service vue-chess --https --url  
> $ curl -k https://192.168.49.2:31516  

**ssh tunnel to access to vue-chess service from outside the vm**  
> $ service_name=vue-chess  
> $ service_port=$(minikube service $service_name --https --url | cut -d':' -f3)  
> $ ssh -i ~/.minikube/machines/minikube/id_rsa docker@$(minikube ip) -NL \*:${service_port}:0.0.0.0:${service_port}  

