FROM node:12

WORKDIR /app

COPY . ./

RUN npm install

ENV PORT=3443

EXPOSE 3443

CMD [ "npm", "start" ]