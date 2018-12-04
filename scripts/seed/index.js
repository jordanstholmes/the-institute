const mongoose = require('mongoose');
const insertVideo = require('./controllers/insertVideo');
const insertQuiz = require('./controllers/insertQuiz');

const mockVideo = require('./mockData/video.json');
const mockQuiz = require('./mockData/quiz.json');

const dbUrl = process.env.DB_URL || 'mongodb://localhost/institute';
mongoose.connect(dbUrl, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', () => {
  console.log('Connected to mongo server on', dbUrl);
  insertQuiz(mockQuiz)
    .then(({ _id }) => {
      mockVideo[0].quiz_id = _id;
      mockVideo[1].quiz_id = _id;
      return mockVideo;
    })
    .then(video => insertVideo(video[0]))
    .then(() => insertVideo(mockVideo[1]))
    .then(() => {
      console.log('seed written');
      db.close();
    })
    .catch(err => console.error(err));
});
