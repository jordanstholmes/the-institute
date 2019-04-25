const { Video } = require('../models');

module.exports.insertVideo = video => Video.create(video);

module.exports.batchInsert = videos => Video.insertMany(videos);

module.exports.getVideoById = id => Video.find({ id });
