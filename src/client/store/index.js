import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';

const loggerMiddleware = createLogger();

export default createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  ),
);

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
