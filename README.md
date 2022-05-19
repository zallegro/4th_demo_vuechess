### vuejs express webpack mongodb socket-io chess-game

#### Mongo
**Start up mongo initially**
> $ docker run --name mongo -v "$PWD"/mongo/data:/data/db -p 27017:27017 -d mongo


**Command to build app image from Dockerfile**
> $docker build -t vue-chess .
