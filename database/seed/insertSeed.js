const readline = require('readline');
const { Controller, db } = require('../index.js');
const { LOG_FREQUENCY, MAX_BATCH_SIZE } = require('./seed.config.js');

const insertSeed = () => {
  const reader = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  let read = 0;
  let written = 0;
  let lastLoopEndTime = 0;
  let buffer = [];

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
          if (written % LOG_FREQUENCY === 0) {
            const uptime = process.uptime();
            console.log('written:', written, 'read:', read);
            console.log(`Loop took ${(uptime - lastLoopEndTime) / 60} minutes`);
            lastLoopEndTime = uptime;
            console.log(res[res.length - 1]);
          }
        })
        .catch(err => console.error(err));
    }
  });
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

// const write = () => {
//   reader.on('line', (line) => {
//     seedEntries.push(JSON.parse(line));
//     count += 1;

//     if (count === 20) {
//       Controller.batchInsert(seedEntries)
//         .then((res) => {
//           console.log('wrote:', count);
//         })
//         .catch(err => console.error(err));

//       seedEntries = [];
//     }
//     if (count % 20 === 0 && count < 60) {
//       write();
//     }
//   });
// };
// write();
