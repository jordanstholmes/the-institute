FROM node:10.12.0-alpine

WORKDIR /app

# Is it best practice to copy my node_modules?
COPY . /app

RUN npm install && npm run build

EXPOSE 7000

ENV DB_HOST="host.docker.internal"

CMD ["npm", "start"]

# docker run --net=host --rm -p <hostPort>:<dockerExposedPort> <image>