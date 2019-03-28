FROM node:10

ENV PROJECT_ROOT=/usr/src/app

# RUN apt-get install git openssh

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json $PROJECT_ROOT/
COPY yarn.lock $PROJECT_ROOT/

WORKDIR $PROJECT_ROOT
RUN yarn install

USER root
COPY . $PROJECT_ROOT/

CMD ["yarn", "start"]