FROM node:16

WORKDIR /usr/src/app 
COPY package*.json .
COPY index.js .

RUN npm install

EXPOSE 4500
CMD ["npm" , "start"]