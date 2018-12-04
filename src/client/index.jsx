/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import VideoContainer from './containers/VideoContainer';
import QuizContainer from './containers/QuizContainer';
import store from './store';

const App = () => (
  <div>
    <VideoContainer />
    <QuizContainer />
  </div>
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
