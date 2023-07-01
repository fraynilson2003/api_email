FROM node:16-alpine


RUN  npm install -g ts-node

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install

ENV NODE_ENV=production

RUN npm run

EXPOSE 3008

CMD [ "npm", "start", "node -r dotenv/config index.js" ]