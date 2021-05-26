npm install
npm run build
zip ./build.zip ./build -r
scp ./build.zip dinowex@10.100.12.250:~/web/build.zip
scp ./docker-compose.yaml dinowex@10.100.12.250:~/client/docker-compose.yaml
scp ./Dockerfile dinowex@10.100.12.250:~/client/Dockerfile
rm -r ./build.zip