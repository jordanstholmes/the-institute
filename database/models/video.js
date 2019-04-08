const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const videoSchema = mongoose.Schema({
  title: String,
  source: String,
  quiz_id: ObjectId,
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
