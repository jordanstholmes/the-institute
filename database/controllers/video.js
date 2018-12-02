const { ObjectId } = require('mongoose').Types;
const Video = require('../models/video.js');

const getVideoById = id => new Promise((resolve, reject) => {
  Video.findById({ _id: ObjectId(id) }, (err, response) => {
    if (err) return reject(err);
    return resolve(response);
  });
});

module.exports = getVideoById;
