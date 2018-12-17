/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import VideoContainer from './containers/VideoContainer';
import QuizContainer from './containers/QuizContainer';
import store from './store';

const theme = {
  font: 'Arial, Helvetica, sans-serif',
};

const App = () => (
  <div>
    <VideoContainer />
    <QuizContainer />
  </div>
);

ReactDom.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('app'),
);
