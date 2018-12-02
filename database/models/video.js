const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
  source: String,
  quiz_id: String,
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
