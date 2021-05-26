docker build -t vexs/backend . 
docker save vexs/backend > vexs.tar
scp ./vexs.tar dinowex@10.100.12.250:~/server/vexs.tar
scp ./docker-compose.yaml dinowex@10.100.12.250:~/server/docker-compose.yaml
rm -r ./vexs.tar
docker rmi vexs/backend