# base image
FROM arm32v7/node:current-stretch-slim

# prepare dependencies installation
ADD yarn.lock /yarn.lock
ADD package.json /package.json

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
# RUN yarn first to update/initiate yarn
RUN yarn

# set working directory
WORKDIR /app
ADD . /app

RUN yarn run build

# start app
CMD ["yarn", "start"]