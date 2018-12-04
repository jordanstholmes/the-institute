import mongoose from 'mongoose';
import getVideoById from './controllers/getVideo';
import insertVideo from './controllers/insertVideo';
import getQuizById from './controllers/getQuiz';
import insertQuiz from './controllers/insertQuiz';

const dbUrl = process.env.DB_URL || 'mongodb://localhost/institute';
mongoose.connect(dbUrl, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', () => console.log('Connected to mongo server on', dbUrl));

export {
  getVideoById,
  getQuizById,
  insertQuiz,
  insertVideo,
};
