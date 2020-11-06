# This Dockerfile is a copy of ./server/Dockerfile
# It was copied here becaus DigitalOceans app platform only looks at the
# root dir for Dockerfiles.
# TODO: Find a way to deploy without duplicating this file.
FROM node:12

WORKDIR /server

COPY /server/package*.json ./

RUN npm install

COPY /server/. .

ENV PORT=3443

EXPOSE 3443

CMD [ "npm", "start" ]