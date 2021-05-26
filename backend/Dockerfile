# SOURCE: https://blog.logrocket.com/containerized-development-nestjs-docker/
FROM node:14-alpine

WORKDIR /usr/src/app

RUN apk update && apk upgrade && apk add --no-cache bash git

COPY package*.json ./

# RUN npm install
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]