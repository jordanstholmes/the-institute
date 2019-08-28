
const VIDEO_URLS = [
  'https://vimeo.com/33219961',
  'https://vimeo.com/71336599',
  'https://vimeo.com/41325185',
];

const SEED_TOTAL = 1e3;
const MAX_NUM_OF_MODULES = 12; // arbitrarily chosen
const MAX_SUBMODULES = 15; // arbitrarily chosen
const MAX_BATCH_SIZE = 500; // Batch to avoid running out of RAM
const LOG_FREQUENCY = 1e2;

module.exports = {
  VIDEO_URLS,
  SEED_TOTAL,
  MAX_NUM_OF_MODULES,
  MAX_SUBMODULES,
  MAX_BATCH_SIZE,
  LOG_FREQUENCY,
};
