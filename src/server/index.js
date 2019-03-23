import morgan from 'morgan';
import express from 'express';
// eslint-disable-next-line
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// eslint-disable-next-line
import fetch from 'isomorphic-fetch';

import indexTemplate from './indexTemplate';
import ReactComponents from './rootReact';

import { getVideoById, getQuizById } from '../../database';

const port = process.env.PORT || 7000;
const url = process.env.URL || 'localhost';

const app = express();
const logging = process.env.NODE_ENV === 'production' ? morgan('short') : morgan('dev');

app.use(logging);
app.get('/', (req, res) => {
  console.log('hit root get');
  const reactStr = ReactDOMServer.renderToString(ReactComponents);
  const ssr = indexTemplate(reactStr);
  res.send(ssr);
});

app.use(express.static('public'));

app.use(logging);
app.get('/videos/:videoId', (req, res) => {
  const { videoId } = req.params;
  getVideoById(videoId)
    .then(video => res.send(video))
    .catch((err) => {
      console.error('getVideoById error:', err);
      res.sendStatus(404);
    });
});

app.get('/quizzes/:quizId', (req, res) => {
  const { quizId } = req.params;
  getQuizById(quizId)
    .then(quiz => res.send(quiz))
    .catch((err) => {
      console.error('getQuizByName error:', err);
      res.send(404);
    });
});

app.listen(port, () => console.log(`Server on ${url} using port ${port}`));
