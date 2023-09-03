FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*
RUN git clone https://github.com/djalegapremium/Zokou-2.0  /root/Zokou_BOt
WORKDIR /root/Zokou_Bot/


COPY package.json .
RUN npm install pm2 -g
RUN yarn install --network-concurrency 1

COPY . .

EXPOSE 5000

CMD ["node", "index.js"]
