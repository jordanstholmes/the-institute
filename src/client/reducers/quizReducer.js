// import { CHANGE_VIDEO_SOURCE, REQUEST_QUIZ, RECEIVE_QUIZ } from '../actions/actions';


export default function (state = {}, action) {
  return state;
  // switch (action.type) {
  //   case CHANGE_VIDEO_SOURCE:
  //     return Object.assign({}, state, {
  //       source: state.source === video1 ? video2 : video1,
  //     });
  //   case REQUEST_QUIZ:
  //     console.log('received a request for a new quiz');
  //     return state;
  //   case RECEIVE_QUIZ:
  //     console.log('got quiz name?', action.quizName);
  //     return Object.assign({}, state, {
  //       quizName: action.quizName,
  //     });
  //   default:
  //     return state;
  // }
}

/*
Store Shape:
{
  video: {
    title: String,
    source: String,
    quiz_id: string
  },
  quiz: {
    title: String,
    questions: [
      {
        questionText: String
        answerOptions: [strings]
        answer: [strings]
      }
    ]
  }
}
*/
