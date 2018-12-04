import morgan from 'morgan';
import express from 'express';

import { getVideoById, getQuizByName } from '../../database';

const port = process.env.PORT || 7000;
const url = process.env.URL || 'localhost';

const app = express();
const logging = process.env.NODE_ENV === 'production' ? morgan('short') : morgan('dev');

app.use(logging);
app.use(express.static('public'));

app.use(logging);
app.get('/videos/:videoId', (req, res) => {
  const { videoId } = req.params;
  getVideoById(videoId)
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
