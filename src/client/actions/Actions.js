/* global fetch */
import 'isomorphic-fetch';

import * as types from './ActionTypes';


export function requestVideo() {
  return { type: types.REQUEST_VIDEO };
}

export function receiveVideo(video) {
  return { type: types.RECEIVE_VIDEO, video };
}

export function receiveVideoFailure(err) {
  return { type: types.RECEIVE_VIDEO_FAILURE, err };
}

export function requestQuiz() {
  return { type: types.REQUEST_QUIZ };
}

export function receiveQuiz(quiz) {
  return { type: types.RECEIVE_QUIZ, quiz };
}

export function receiveQuizFailure(err) {
  return { type: types.RECEIVE_QUIZ_FAILURE, err };
}

export function fetchVideo(videoId) {
  return (dispatch) => {
    dispatch(requestVideo());

    return fetch(`/videos/${videoId}`)
      .then(response => response.json())
      .then(video => dispatch(receiveVideo(video)))
      .catch(err => dispatch(receiveVideoFailure(err)));
  };
}

export function fetchQuiz(quizId) {
  return (dispatch) => {
    dispatch(requestQuiz(quizId));

    return fetch(`/quizzes/${quizId}`)
      .then(response => response.json())
      .then(quiz => dispatch(receiveQuiz(quiz)))
      .catch(err => dispatch(receiveQuizFailure(err)));
  };
}
