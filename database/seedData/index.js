const generateVideo = require('./generateSeedData.js');

/*
Write function to write seed file
      > Do it with write file and small amount
      > run with npm script
      > Switch to console and Use pipe and gzip
      > unzip it and check it looks right
> Can this work with a 1k, then 1mil, then 5mil
*/

const writeSeedFile = (callback) => {
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

  let i = 0;
  const { stdout } = process;

  const writeToStdOut = () => {
    let hasSpace = true;

    while (i <= numOfRecords && hasSpace) {
      i += 1;
      let video = generateVideo();
      video.id = i;
      video = JSON.stringify(video);

      if (i % LOG_FREQUENCY === 0) {
        console.error('Wrote:\n', video);
      }

      if (i === numOfRecords) {
        stdout.write(`${video}\n`, 'utf8', callback);
      } else {
        hasSpace = stdout.write(`${video}\n,`, 'utf8');
      }
    }
    if (i < numOfRecords) stdout.once('drain', writeToStdOut);
  };

  writeToStdOut();
};

writeSeedFile(() => {
  console.log(']');

  const runTime = process.uptime();
  console.error(`seed generation took ${runTime / 60} minutes`);
});
