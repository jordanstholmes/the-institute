const fs = require('fs');
const path = require('path');
const generateVideos = require('./generateSeedData.js');

/*
Write function to write seed file
> Do it with write file and small amount
> run with npm script
> Switch to console and Use pipe and gzip
> unzip it and check it looks right
> Can this work with a 1k, then 1mil, then 5mil
*/

const writeSeedFile = () => {
  const videos = generateVideos(3);
  const outputPath = path.join(__dirname, './seedVideos.json');

  fs.writeFile(outputPath, JSON.stringify(videos), (err) => {
    if (err) throw err;
    console.log('done writing?');
  });
};

writeSeedFile();
