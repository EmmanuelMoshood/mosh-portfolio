FROM node:18-alpine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 3000


CMD ["npm", "start"]

