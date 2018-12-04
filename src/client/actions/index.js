import fetch from 'isomorphic-fetch';

export const REQUEST_VIDEO = 'REQUEST_VIDEO';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REQUEST_QUIZ = 'REQUEST_QUIZ';
export const RECEIVE_QUIZ = 'RECEIVE_QUIZ';

function requestVideo(videoId) {
  return { type: REQUEST_VIDEO, videoId };
}

function receiveVideo(video) {
  return { type: RECEIVE_VIDEO, video };
}

function requestQuiz(quizId) {
  return { type: REQUEST_QUIZ, quizId };
}

function receiveQuiz(quiz) {
  return { type: RECEIVE_QUIZ, quiz };
}

export function fetchVideo(videoId) {
  return (dispatch) => {
    dispatch(requestVideo());

    return fetch(`http://localhost:7000/videos/${videoId}`)
      .then(response => response.json(), err => console.log('An error occurred', err))
      .then(video => dispatch(receiveVideo(video)));
  };
}

export function fetchQuiz(quizId) {
  return (dispatch) => {
    dispatch(requestQuiz(quizId));

    return fetch(`http://localhost:7000/quizzes/${quizId}`)
      .then(response => response.json(), err => console.log('An error occurred', err))
      .then(quiz => dispatch(receiveQuiz(quiz)));
  };
}
