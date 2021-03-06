# This Dockerfile is a copy of ./server/Dockerfile
# It was copied here becaus DigitalOceans app platform only looks at the
# root dir for Dockerfiles.
# TODO: Find a way to deploy without duplicating this file.
FROM node:14

WORKDIR /server

COPY /server/. .

RUN npm install

ENV PORT=3443

EXPOSE 3443

CMD [ "npm", "run", "prod" ]