const generateVideo = require('./generateSeedData.js');

/*
Write function to write seed file
      > Do it with write file and small amount
      > run with npm script
      > Switch to console and Use pipe and gzip
      > unzip it and check it looks right
> Can this work with a 1k, then 1mil, then 5mil
*/

const writeSeedFile = () => {
  // get value of first arg
  const firstArg = process.argv[2];
  if (firstArg.indexOf('--amount=') === -1) {
    console.error('Wrong CLI argument, please use "--amount=NUMBER_HERE"');
    return;
  }

  const numOfRecords = Number(firstArg.split('=')[1]);

  if (Number.isNaN(numOfRecords) || numOfRecords < 1) {
    console.error('amount was not a valid number');
  }

  // Write to file through stdout
  const LOG_FREQUENCY = 100000;
  console.log('[');

  for (let i = 1; i <= numOfRecords; i += 1) {
    const video = generateVideo();
    video.id = i;
    console.log(JSON.stringify(video));

    if (i % LOG_FREQUENCY === 0) {
      console.error('Wrote:\n', video);
    }
  }

  console.log(']');

  const runTime = process.uptime();
  console.error(`seed generation took ${runTime / 60} minutes`);
};

writeSeedFile();
