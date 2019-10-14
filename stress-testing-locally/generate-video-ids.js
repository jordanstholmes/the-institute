const fs = require('fs');
const path = require('path');

const ONE_MILLION = 1e6;
const NINE_MILLION = 9e6;
const writer = fs.createWriteStream(path.join(__dirname, 'video_ids.csv'));

let videoId;

for (let i = 0; i < 100; i += 1) {
  videoId = Math.floor(Math.random() * ONE_MILLION) + NINE_MILLION; // number from 9 - 10 million
  writer.write(`${videoId}\n`);
}
