/* global fetch */
import 'isomorphic-fetch';

import * as types from './ActionTypes';


export function requestVideo() {
  return { type: types.REQUEST_VIDEO };
}

export function receiveVideo(video) {
  return { type: types.RECEIVE_VIDEO, video };
}

export function requestQuiz(quizId) {
  return { type: types.REQUEST_QUIZ, quizId };
}

export function receiveQuiz(quiz) {
  return { type: types.RECEIVE_QUIZ, quiz };
}

export function fetchVideo(videoId) {
  return (dispatch) => {
    dispatch(requestVideo());

    return fetch(`/videos/${videoId}`)
      .then(response => response.json())
      .then(video => dispatch(receiveVideo(video)))
      .catch(err => console.log(err));
  };
}

export function fetchQuiz(quizId) {
  return (dispatch) => {
    dispatch(requestQuiz(quizId));

    return fetch(`/quizzes/${quizId}`)
      .then(response => response.json())
      .then(quiz => dispatch(receiveQuiz(quiz)))
      .catch(err => console.error(err));
  };
}
