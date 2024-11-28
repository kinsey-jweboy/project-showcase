# 构建阶段
FROM node:18-slim AS builder

WORKDIR /app

COPY . .

RUN npm i -g pnpm --registry=https://registry.npmmirror.com && \
    pnpm install

RUN pnpm build 

RUN rm -rf .next/cache


# 运行阶段
FROM node:18-slim

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm --registry=https://registry.npmmirror.com && \
    pnpm install --prod --frozen-lockfile

EXPOSE 3200

CMD [ "npm", "run", "start" ]

