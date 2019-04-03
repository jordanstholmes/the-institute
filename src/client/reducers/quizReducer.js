import { REQUEST_QUIZ, RECEIVE_QUIZ } from '../actions/ActionTypes';

const placeHolderQuiz = {
  title: '',
  questions: [],
};

export default function (state = placeHolderQuiz, action) {
  switch (action.type) {
    case REQUEST_QUIZ:
      return state;
    case RECEIVE_QUIZ:
      return action.quiz;
    default:
      return state;
  }
}
