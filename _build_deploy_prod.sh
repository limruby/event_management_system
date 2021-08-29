
# build web
rm -r ./backend/public
npm install
npm run build
cp -r build ./backend/public
rm -r ./build

# build server
cd ./backend
sudo docker build -t iiidentex/backend_prod . 

# build insecure web
rm -r ./backend/public
npm install
npm run build:insecure
cp -r build ./backend/public
rm -r ./build

# build insecure server
cd ./backend
sudo docker build -t iiidentex/backend_prod_insecure . 

# deploy
sudo docker-compose -f docker-compose-fsktm-prod.yaml up -d

cd ../