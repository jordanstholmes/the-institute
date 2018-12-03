import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
  title: String,
  source: String,
  quiz_id: String,
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
