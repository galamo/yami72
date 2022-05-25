FROM node:16

WORKDIR /usr/src/app 
COPY package*.json .
COPY tsconfig.json .
COPY dist .
COPY .env .

RUN npm install -g nodemon typescript 
RUN npm install

EXPOSE 3500
CMD ["node" , "index.js"]