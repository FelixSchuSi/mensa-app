FROM node:12

WORKDIR /app

COPY /server/package*.json ./

RUN npm install

COPY /server/. .

ENV PORT=3443

EXPOSE 3443

CMD [ "npm", "start" ]