FROM node:latest

WORKDIR /bindmount

# Is it best practice to copy my node_modules?
COPY package-lock.json package.json ./

RUN npm install --no-progress --ignore-optional
# RUN ["npm", "run", "seed"]

EXPOSE 7000

# ENV DB_HOST="host.docker.internal"

# CMD ["npm", "run", "docker-dev"]

CMD ["/bin/bash", "./docker/seed-and-start.sh"]

# cli commands
# docker build -t nodan .
# docker run --rm -p 2000:7000 -v $(pwd):/app --name institue nodan

# docker run --rm -p <hostPort>:<dockerExposedPort> -v $(pwd):/app --name institute  <image>