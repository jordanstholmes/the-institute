const config = require('./seed.config.js');
const { generateVideos } = require('./generateVideos.js');

const getCLIAmountArg = () => {
  const firstArg = process.argv[2];

  if (!firstArg || firstArg.indexOf('--amount=') === -1) {
    console.error('Wrong or absent --amount argument, please use "--amount=NUMBER_HERE"');
    process.exit(1);
  }

  const numOfRecords = Number(firstArg.split('=')[1]);

  if (Number.isNaN(numOfRecords) || numOfRecords < 1) {
    console.error('amount was not a valid number');
    process.exit(1);
  }

  if (numOfRecords % config.MAX_BATCH_SIZE !== 0) {
    console.error('amount must be perfectly divisble by MAX_BATCH_SIZE');
    process.exit(1);
  }

  return numOfRecords;
};

const writeSeedFile = (callback) => {
  const numOfRecords = getCLIAmountArg();
  const { stdout } = process;
  let i = 0;

  const writeToStdOut = () => {
    let hasSpace = true;
    let videoBatch;

    while (i <= numOfRecords && hasSpace) {
      const batch = generateVideos(i, numOfRecords, config.MAX_BATCH_SIZE);
      videoBatch = batch.videos;
      i = batch.currentId;

      if (i % config.LOG_FREQUENCY === 0) {
        console.error('Wrote:\n', i);
      }

      if (i === numOfRecords) {
        stdout.write(videoBatch, callback);
      } else {
        hasSpace = stdout.write(videoBatch);
      }
    }

    if (i < numOfRecords) stdout.once('drain', writeToStdOut);
  };

  writeToStdOut();
};

writeSeedFile(() => {
  const runTime = process.uptime();
  console.error(`seed generation took ${runTime / 60} minutes`);
});
