const faker = require('faker');
const config = require('./seed.config.js');

const generateVideos = (startId, endId, maxBatchSize) => {
  const videos = [];
  let id = startId;
  let randomIdx;
  let randomVideoUrl;
  let randomTitle;
  let randomModuleNum;
  let randomSubModuleNum;

  while (id <= endId && videos.length < maxBatchSize) {
    id += 1;
    randomIdx = Math.floor(Math.random() * config.VIDEO_URLS.length);
    randomVideoUrl = config.VIDEO_URLS[randomIdx];
    randomTitle = faker.company.catchPhrase();
    randomModuleNum = Math.floor(Math.random() * config.MAX_NUM_OF_MODULES) + 1;
    randomSubModuleNum = Math.floor(Math.random() * config.MAX_SUBMODULES);

    videos.push(JSON.stringify({
      id,
      source: randomVideoUrl,
      title: randomTitle,
      moduleNum: randomModuleNum,
      submoduleNum: randomSubModuleNum,
    }));
  }

  videos.push(''); // makes the join add '\n' to end of batch
  return { currentId: id, videos: videos.join('\n') };
};

module.exports = { generateVideos };
