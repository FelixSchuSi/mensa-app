FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV PORT=3443

EXPOSE 3443

CMD [ "npm", "start" ]