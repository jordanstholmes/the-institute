const mongoose = require('mongoose');
const getVideoById = require('./controllers/video.js');
const getQuizByName = require('./controllers/quiz.js');

const dbUrl = process.env.DB_URL || 'mongodb://localhost/institute';
mongoose.connect(dbUrl, { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.once('open', () => console.log('Connected to mongo server on', dbUrl));

module.exports = { getVideoById, getQuizByName };
