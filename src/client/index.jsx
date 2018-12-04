/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import VideoContainer from './containers/VideoContainer';
import Quiz from './components/Quiz';
import store from './store';
import mockQuiz from './tempQuizData';

const App = () => (
  <div>
    <VideoContainer />
    <Quiz quiz={mockQuiz} />
  </div>
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
