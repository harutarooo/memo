ARG NODE_VER

FROM node:${NODE_VER}-slim

RUN apt-get update && apt-get install -y git\
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

USER node
RUN mkdir -p /home/node/app/node_modules


WORKDIR /home/node/app
