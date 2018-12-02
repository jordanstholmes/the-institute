const path = require('path');
const fs = require('fs');

fs.readFile(path.resolve(__dirname, '.env-example'), (err, data) => {
  if (err) return console.error(err);
  fs.writeFile(path.resolve(__dirname, '.env'), data, (err2) => {
    if (err2) return console.error(err2);
    return console.log('Completed setup.js setup!');
  });
  return data;
});
