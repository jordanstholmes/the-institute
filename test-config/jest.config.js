const path = require('path');

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/test-config/setupEnzyme.js'],
  rootDir: path.join(__dirname, '../'),
};
