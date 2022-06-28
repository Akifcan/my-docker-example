FROM node:16
WORKDIR /app
COPY package.json .

ARG NODE_ENV
RUN if ["$NODE_ENV" = "development" ]; \ 
        then npm install; npm i -d nodemon; \
        else npm install --only=production; \
        fi
RUN npm i --location=global nodemon

COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD ["npm", "run", "start"]