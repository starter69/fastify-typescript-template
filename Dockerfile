FROM node:16-alpine

EXPOSE 3000

ENV NODE_ENV production

RUN mkdir /app && chown -R node:node /app
WORKDIR /app
USER node
COPY --chown=node:node package.json package-lock.json ./
RUN npm install && npm cache clear --force
COPY --chown=node:node . .

RUN npm run build

CMD ["node", "dist/index.mjs"]
