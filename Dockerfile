FROM node:18

EXPOSE 3003

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .
