# pull official base image
# FROM node:17-alpine3.12

# set working directory
# WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
# ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
# COPY package.json ./
# COPY yarn.lock ./
# RUN yarn install
# RUN npm install react-scripts@3.4.1 -g --silent

# add app
# COPY . ./

# start app
# CMD ["yarn", "start"]

FROM node:15.12.0

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN yarn

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3000

CMD ["yarn", "run", "start"]