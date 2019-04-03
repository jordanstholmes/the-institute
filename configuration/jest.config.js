const path = require('path');

module.exports = {
  setupFilesAfterEnv: ['<rootDir>/configuration/setupEnzyme.js'],
  rootDir: path.join(__dirname, '../'),
};
