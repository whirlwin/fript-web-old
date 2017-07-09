FROM node

RUN npm install

WORKDIR /opt/fript-web

CMD ["./node_modules/.bin/nodemon", "-L", "bin/www"]
