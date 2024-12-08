#Get node image from dockerhub
FROM node:16-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

cmd ["npm", "run", "dev"]