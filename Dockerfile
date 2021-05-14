# SOURCE: https://blog.logrocket.com/containerized-development-nestjs-docker/
FROM node:14-alpine As development

WORKDIR /usr/src/app

RUN apk update && apk upgrade && apk add --no-cache bash git

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

RUN npm install -g serve

# COPY . .

COPY --from=development /usr/src/app/build ./build

CMD ["serve", "-s", "build"]