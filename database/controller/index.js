const { Video } = require('../models');

module.exports.insertVideo = video => Video.create(video);
