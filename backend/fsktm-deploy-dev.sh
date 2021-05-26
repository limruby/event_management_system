docker build -t vexs/backend . 
docker save vexs/backend > vexs.tar
scp ./vexs.tar dinowex@103.18.2.220:~/server/vexs.tar
scp ./docker-compose.yaml dinowex@103.18.2.220:~/server/docker-compose.yaml
rm -r ./vexs.tar
docker rmi vexs/backend