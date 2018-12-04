import { combineReducers } from 'redux';
import video from './videoReducer';
import quiz from './quizReducer';

export default combineReducers({
  video,
  quiz,
});

// import { CHANGE_VIDEO_SOURCE, REQUEST_QUIZ, RECEIVE_QUIZ } from '../actions/actions';

// const video1 = 'https://player.vimeo.com/video/109855756?color=ff0179&title=0&byline=0&portrait=0';
// const video2 = 'https://player.vimeo.com/video/109259708?title=0&byline=0&portrait=0';

// export default function (state = { source: video1, quizName: '' }, action) {
//   switch (action.type) {
//     case CHANGE_VIDEO_SOURCE:
//       return Object.assign({}, state, {
//         source: state.source === video1 ? video2 : video1,
//       });
//     case REQUEST_QUIZ:
//       console.log('received a request for a new quiz');
//       return state;
//     case RECEIVE_QUIZ:
//       console.log('got quiz name?', action.quizName);
//       return Object.assign({}, state, {
//         quizName: action.quizName,
//       });
//     default:
//       return state;
//   }
// }
