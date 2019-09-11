const path = require('path');

module.exports = {
  setupFilesAfterEnv: [
    '<rootDir>/test-config/setupEnzyme.js',
    '<rootDir>/test-config/jest.env.js',
  ],
  rootDir: path.join(__dirname, '../'),
  verbose: true,
};
