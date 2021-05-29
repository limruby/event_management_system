rm -r ./build.zip
npm install
npm run build
zip ./build.zip ./build -r