# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM node:18-alpine
ENV TZ='Asia/Saigon'

# Output file
WORKDIR /react_app
COPY ./package*.json ./
RUN npm ci

COPY . /react_app

ENTRYPOINT [ "npm", "run", "start" ]

EXPOSE 3000