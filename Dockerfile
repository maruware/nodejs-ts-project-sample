FROM node:10

ENV HOME=/usr/src/app

# RUN apt-get install git openssh

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json $HOME/
COPY yarn.lock $HOME/

WORKDIR $HOME
RUN yarn install

USER root
COPY . $HOME/

CMD ["yarn", "start"]