const config = require('./seed.config.js');
const { generateVideos } = require('./generateVideos.js');

const validateConfig = () => {
  const { SEED_TOTAL, MAX_BATCH_SIZE } = config;

  if (SEED_TOTAL < 1) {
    throw new Error('CONFIG-ERR: SEED_TOTAL must be greater than zero');
  }

  if (Number.isNaN(SEED_TOTAL) || Number.isNaN(MAX_BATCH_SIZE)) {
    throw new Error('CONFIG-ERR: SEED_TOTAL and MAX_BATCH_SIZE must be numeric');
  }

  if (SEED_TOTAL % MAX_BATCH_SIZE !== 0) {
    throw new Error('CONFIG-ERR: SEED_TOTAL must be perfectly divisible by MAX_BATCH_SIZE');
  }
};

const writeSeedFile = (callback) => {
  validateConfig();

  const { stdout } = process;
  let i = 0;

  const writeToStdOut = () => {
    let hasSpace = true;
    let videoBatch;

    while (i <= config.SEED_TOTAL && hasSpace) {
      const batch = generateVideos(i, config.SEED_TOTAL, config.MAX_BATCH_SIZE);
      videoBatch = batch.videos;
      i = batch.currentId;

      if (i % config.LOG_FREQUENCY === 0) {
        console.error('Wrote:\n', i);
      }

      if (i === config.SEED_TOTAL) {
        stdout.write(videoBatch, callback);
      } else {
        hasSpace = stdout.write(videoBatch);
      }
    }

    if (i < config.SEED_TOTAL) stdout.once('drain', writeToStdOut);
  };

  writeToStdOut();
};

writeSeedFile(() => {
  const runTime = process.uptime();
  console.error(`seed generation took ${runTime / 60} minutes`);
});
