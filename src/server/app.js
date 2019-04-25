require('newrelic');
import morgan from 'morgan';
import express from 'express';
// eslint-disable-next-line
import React from 'react';
import ReactDOMServer from 'react-dom/server';
// eslint-disable-next-line
import fetch from 'isomorphic-fetch';

import indexTemplate from './indexTemplate';
import ReactComponents from './rootReact';

import { Controller } from '../../database';

const app = express();
const logging = process.env.NODE_ENV === 'production' ? morgan('short') : morgan('dev');

app.use(logging);
app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('hit root get');
  const reactStr = ReactDOMServer.renderToString(ReactComponents);
  const ssr = indexTemplate(reactStr);
  res.send(ssr);
});

app.get('/videos/:videoId', (req, res) => {
  const { videoId } = req.params;
  Controller.getVideoById(videoId)
    .then(([video]) => res.send(video))
    .catch((err) => {
      console.error('getVideoById error:', err);
      res.sendStatus(404);
    });
});

app.get('/quizzes/:quizId', (req, res) => {
  const { quizId } = req.params;
  Controller.getQuizById(quizId)
    .then(quiz => res.send(quiz))
    .catch((err) => {
      console.error('getQuizByName error:', err);
      res.sendStatus(404);
    });
});

export default app;
