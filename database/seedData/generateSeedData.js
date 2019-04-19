const faker = require('faker');

const VIDEO_URLS = [
  'https://player.vimeo.com/video/109855756?color=ff0179&title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/109259708?title=0&byline=0&portrait=0',
  'https://vimeo.com/238981026/b5de19aeb2',
];

const MAX_NUM_OF_MODULES = 12; // arbitrarily chosen
const MAX_SUBMODULES = 15; // arbitrarily chosen

const generateVideo = () => {
  const randomIdx = Math.floor(Math.random() * VIDEO_URLS.length);
  const randomVideoUrl = VIDEO_URLS[randomIdx];
  const randomTitle = faker.company.catchPhrase();

  // +1 below is so so that the minimum module value is 1
  const randomModuleNum = Math.floor(Math.random() * MAX_NUM_OF_MODULES) + 1;
  const randomSubModuleNum = Math.floor(Math.random() * MAX_SUBMODULES);

  return {
    source: randomVideoUrl,
    title: randomTitle,
    moduleNum: randomModuleNum,
    submoduleNum: randomSubModuleNum,
  };
};

module.exports = generateVideo;
