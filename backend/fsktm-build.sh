rm -r ./vexsdev.tar
docker build -t vexsdev/backend . 
docker save vexsdev/backend > vexsdev.tar
docker rmi vexsdev/backend