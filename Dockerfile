FROM node:15.12.0

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN yarn

ENTRYPOINT ["/entrypoint.sh"]

EXPOSE 3000

CMD ["yarn", "run", "start"]