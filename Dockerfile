FROM node:latest

RUN npm install

WORKDIR /opt/fript-web

CMD ["node", "bin/www"]
