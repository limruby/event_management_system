rm -r ./vexs.tar
docker build -t vexs/backend . 
docker save vexs/backend > vexs.tar
docker rmi vexs/backend