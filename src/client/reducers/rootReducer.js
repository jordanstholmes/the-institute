import { combineReducers } from 'redux';
import video from './videoReducer';
import quiz from './quizReducer';

export default combineReducers({
  video,
  quiz,
});
