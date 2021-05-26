npm install
npm run build
zip ./build.zip ./build -r
scp ./build.zip dinowex@103.18.2.220:~/client/build.zip
scp ./docker-compose-fsktm.yaml dinowex@103.18.2.220:~/client/docker-compose.yaml
scp ./Dockerfile dinowex@103.18.2.220:~/client/Dockerfile
rm -r ./build.zip