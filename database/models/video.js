const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({
  id: { type: Number, index: { unique: true } },
  title: String,
  source: String,
  moduleNum: Number,
  submoduleNum: Number,
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
