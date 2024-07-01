# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM node:18-alpine
ENV TZ='Asia/Saigon'

# Output file
WORKDIR /react_app
COPY . /react_app

RUN npm ci 
RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]

EXPOSE 3000