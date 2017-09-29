FROM node:4

ADD . ./app 


RUN cd /app; \
npm install --production

EXPOSE 3000

CMD ["node" , "app/index.js"]


