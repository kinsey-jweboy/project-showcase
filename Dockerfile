FROM node:18-slim

WORKDIR /app

COPY package.json ./

COPY pnpm-lock.yaml ./

RUN npm i -g pnpm --registry=https://registry.npmmirror.com

RUN pnpm install

COPY . ./

RUN pnpm build

EXPOSE 3200

CMD [ "npm", "run", "start" ]
