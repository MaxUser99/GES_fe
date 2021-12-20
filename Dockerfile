FROM node:15.12.0

WORKDIR /app

ADD . .

RUN chmod 777 ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

RUN yarn

ENTRYPOINT ["./entrypoint.sh"]

EXPOSE 3000

CMD ["yarn", "run", "start"]