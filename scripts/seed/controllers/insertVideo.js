const Video = require('../models/video');

const insertVideo = video => new Promise((resolve, reject) => {
  Video.create(video, (err, response) => {
    if (err) return reject(err);
    return resolve(response);
  });
});

module.exports = insertVideo;
