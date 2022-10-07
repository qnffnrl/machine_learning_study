FROM node:16-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --immutable --immutable-cache --check-cache

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]

