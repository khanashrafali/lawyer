FROM node:alpine

WORKDIR /app

COPY ./dist/website /app/dist/website

CMD [ "node","dist/website/server/main.js" ]