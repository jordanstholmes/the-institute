const readline = require('readline');
const { Controller, db } = require('../index.js');
const { LOG_FREQUENCY, MAX_BATCH_SIZE, SEED_TOTAL } = require('./config.js');

const insertSeed = () => {
  let read = 0;
  let written = 0;
  let lastLoopEndTime = 0;
  let buffer = [];

  const reader = readline.createInterface({ input: process.stdin });

  reader.on('line', (line) => {
    const seedLine = JSON.parse(line);
    read += 1;
    buffer.push(seedLine);

    if (buffer.length >= MAX_BATCH_SIZE) {
      const batch = buffer;
      buffer = [];
      Controller.batchInsert(batch)
        .then((res) => {
          written += res.length;

          if (written >= SEED_TOTAL) {
            console.log('hit seed total', written, 'of', SEED_TOTAL)
            reader.close();
            db.close();
            console.log(`Insertion complete! ${written} records inserted!`);
            console.log(`Process ran for ${process.uptime() / 60} seconds`);
            process.exit(0);
          } else if (written % LOG_FREQUENCY === 0) {
            const uptime = process.uptime();
            console.log('written:', res[res.length - 1].id, 'read:', read);
            console.log(`Loop took ${(uptime - lastLoopEndTime)} seconds`);
            lastLoopEndTime = uptime;
          }
        })
        .catch((err) => {
          console.log('Hit an error in batchInsert:', err)
          throw err;
        });
    }
  });

  reader.on('close', () => {
    console.log(
      'read:', read,
      'written:', written,
      'lastLoopEndTime', lastLoopEndTime,
      'bufferLength:', buffer.length,
    );
  });

  reader.on('error', (err) => console.log(err));

  const checkForTimeout = (previousWriteCount) => {
    const currentWriteCount = written;
    if (previousWriteCount === written) {
      console.log('TIMED OUT!!');
      return reader.close();
    }
    return setTimeout(() => {
      checkForTimeout(currentWriteCount);
    }, 20 * 1000);
  };

  checkForTimeout();
};

db.on('open', () => {
  console.log('Dropping database...');
  db.dropDatabase((err) => {
    if (err) throw err;
    console.log('Database dropped!');
    console.log('Beginning insertion...');
    insertSeed();
  });
});
