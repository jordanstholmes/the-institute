const config = require('./seed.config.js');
const generateVideos = require('./generateVideos.js');

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
  return numOfRecords;
};

const writeSeedFile = (callback) => {
  const numOfRecords = getCLIAmountArg();
  const { stdout } = process;
  // Write to file through stdout
  // Start
  stdout.write('[');
  console.log(generateVideos(1, 1).videos);

  let i = 0;

  const writeToStdOut = () => {
    let hasSpace = true;
    let videos;

    while (i < numOfRecords && hasSpace) {
      i += config.MAX_BATCH_SIZE;
      /* eslint-disable-next-line */
      videos = generateVideos(i, numOfRecords, config.MAX_BATCH_SIZE).videos;

      if (i % config.LOG_FREQUENCY === 0) {
        console.error('Wrote:\n', i);
      }

      if (i === numOfRecords) {
        stdout.write(`,${videos}`, 'utf8', callback);
      } else {
        hasSpace = stdout.write(`,${videos}`, 'utf8');
      }
    }
    if (i < numOfRecords) {
      stdout.once('drain', writeToStdOut);
    }
  };

  writeToStdOut();
};

writeSeedFile(() => {
  console.log('\n]');

  const runTime = process.uptime();
  console.error(`seed generation took ${runTime / 60} minutes`);
});
