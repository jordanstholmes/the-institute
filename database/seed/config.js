
const VIDEO_URLS = [
  'https://player.vimeo.com/video/109855756?color=ff0179&title=0&byline=0&portrait=0',
  'https://player.vimeo.com/video/109259708?title=0&byline=0&portrait=0',
  'https://vimeo.com/238981026/b5de19aeb2',
];

const SEED_TOTAL = 1e6;
const MAX_NUM_OF_MODULES = 12; // arbitrarily chosen
const MAX_SUBMODULES = 15; // arbitrarily chosen
const MAX_BATCH_SIZE = 500; // Batch to avoid running out of RAM
const LOG_FREQUENCY = 1e5;

module.exports = {
  VIDEO_URLS,
  SEED_TOTAL,
  MAX_NUM_OF_MODULES,
  MAX_SUBMODULES,
  MAX_BATCH_SIZE,
  LOG_FREQUENCY,
};
