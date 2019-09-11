import React from 'react';
import ReactDOMServer from 'react-dom/server';
// eslint-disable-next-line
import fetch from 'isomorphic-fetch';
import ReactComponents from './rootReact';
import generateStaticPage from './indexTemplate';
import { Model } from '../../database';

export const rootReact = (req, res) => {
  const reactStr = ReactDOMServer.renderToString(ReactComponents);
  const ssr = generateStaticPage(reactStr);
  res.send(ssr);
};

export const getVideoById = (req, res) => {
  const { videoId } = req.params;
  Model.Video.find({ id: videoId })
    .then(([video]) => res.send(video))
    .catch((err) => {
      console.error('getVideoById error:', err);
      res.sendStatus(404);
    });
};

export const getQuizById = (req, res) => {
  const { quizId } = req.params;
  Model.Quiz.getQuizById(quizId)
    .then(quiz => res.send(quiz))
    .catch((err) => {
      console.error('getQuizByName error:', err);
      res.sendStatus(404);
    });
};