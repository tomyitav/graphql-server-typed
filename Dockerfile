FROM node:latest
WORKDIR /software/graphql-server

#Adding relevant folders to image
ADD dist /software/graphql-server/dist
ADD node_modules /software/graphql-server/dist/node_modules

WORKDIR /software/graphql-server/dist

CMD ["node", "main.js"]

MAINTAINER tomyitav@gmail.com
