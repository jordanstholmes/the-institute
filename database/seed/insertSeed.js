const readline = require('readline');
const { Controller, db } = require('../index.js');
const { LOG_FREQUENCY, MAX_BATCH_SIZE } = require('./seed.config.js');

async function insertBatch() {
  const reader = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  let count = 0;
  let seedEntries = [];

  for await (const line of reader) {
    seedEntries.push(JSON.parse(line));
    count += 1;
    if (count % MAX_BATCH_SIZE === 0) {
      const batch = seedEntries;
      seedEntries = [];

      console.log('c1:', count);
      Controller.batchInsert(batch)
        .catch(err => console.error(err));
      console.log('c2', count);
    }
  }
}

db.on('open', () => {
  console.log('Dropping database...');
  db.dropDatabase((err) => {
    if (err) throw err;
    console.log('Database dropped!');
    console.log('Beginning insertion...');
    insertBatch();
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
