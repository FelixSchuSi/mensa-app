# This Dockerfile is a copy of ./server/Dockerfile
# It was copied here becaus DigitalOceans app platform only looks at the
# root dir for Dockerfiles.
# TODO: Find a way to deploy without duplicating this file.
FROM node:12

WORKDIR /server

RUN curl -s http://169.254.169.254/metadata/v1/interfaces/public/0/anchor_ipv4/address

COPY /server/. .

RUN npm install

ENV PORT=3443

EXPOSE 3443

CMD [ "npm", "start" ]