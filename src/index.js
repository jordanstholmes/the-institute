const express = require('express');
const morgan = require('morgan');
const db = require('../database/index.js');
const getVideoById = require('../database/controllers/video.js');
const getQuizByName = require('../database/controllers/quiz.js');

const port = process.env.PORT || 7000;
const url = process.env.URL || 'localhost';

const app = express();
const logging = process.env.NODE_ENV === 'production' ? morgan('short') : morgan('dev');

// temporarily hardcode videoId: '5c032bc929a362516c22b2fe'
app.use(logging);
app.get('/videos/:videoId', (req, res) => {
  getVideoById('5c032bc929a362516c22b2fe')
    .then(video => res.send(video))
    .catch((err) => {
      console.err('getVideoById error:', err);
      res.sendStatus(404);
    });
});

// temporarily hardcode quizName: 'SESSION 9 QUIZ'
app.get('/quizzes/:quizName', (req, res) => {
  getQuizByName('SESSION 9 QUIZ')
    .then(quiz => res.send(quiz))
    .catch((err) => {
      console.err('getQuizByName error:', err);
      res.send(404);
    });
});

app.listen(port, () => console.log(`Server on ${url} using port ${port}`));
