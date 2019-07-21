const { spawn } = require('child_process');

const composeDev = (cb) => {
  const doc = spawn('docker-compose', [
    '-f', 'docker-compose.yml',
    '-f', 'docker-compose.dev.yml',
    'up', '--build',
  ]);

  doc.stdout.on('data', data => console.log(data.toString()));
  doc.stderr.on('data', data => console.log(data.toString()));
  cb();
};
// docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
exports.default = composeDev;
