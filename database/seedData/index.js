const faker = require('faker');

const VIDEO_URLS = [
  'https://player.vimeo.com/video/109855756?color=ff0179&title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/109259708?title=0&byline=0&portrait=0',
  'https://vimeo.com/238981026/b5de19aeb2',
];

const MAX_NUM_OF_MODULES = 12; // arbitrarily chosen
const MAX_SUBMODULES = 15; // arbitrarily chosen
const BATCH_SIZE = 1000;

const generateVideos = (startId, batchSize) => {
  const videos = [];
  let randomIdx;
  let randomVideoUrl;
  let randomTitle;
  let randomModuleNum;
  let randomSubModuleNum;

  for (let i = 0; i < batchSize; i += 1) {
    randomIdx = Math.floor(Math.random() * VIDEO_URLS.length);
    randomVideoUrl = VIDEO_URLS[randomIdx];
    randomTitle = faker.company.catchPhrase();

    // +1 below is so so that the minimum module value is 1
    randomModuleNum = Math.floor(Math.random() * MAX_NUM_OF_MODULES) + 1;
    randomSubModuleNum = Math.floor(Math.random() * MAX_SUBMODULES);

    videos.push(JSON.stringify({
      id: startId + i,
      source: randomVideoUrl,
      title: randomTitle,
      moduleNum: randomModuleNum,
      submoduleNum: randomSubModuleNum,
    }));
  }
  return videos.join(',\n');
};

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
  console.log(generateVideos(1, 1));

  let i = 0;
  const { stdout } = process;

  const writeToStdOut = () => {
    let hasSpace = true;
    let videos;

    while (i < numOfRecords && hasSpace) {
      i += BATCH_SIZE;
      videos = generateVideos(i, BATCH_SIZE);

      if (i % LOG_FREQUENCY === 0) {
        console.error('Wrote:\n', i);
      }

      if (i === numOfRecords) {
        stdout.write(`,${videos}`, 'utf8', callback);
      } else {
        hasSpace = stdout.write(`,${videos}`, 'utf8');
      }
    }
    if (i < numOfRecords) stdout.once('drain', writeToStdOut);
  };

  writeToStdOut();
};

writeSeedFile(() => {
  console.log('\n]');

  const runTime = process.uptime();
  console.error(`seed generation took ${runTime / 60} minutes`);
});

// first needs no preceding comma
// every other group needs a preceeding comma
// OR
// every group needs a comma after except the final