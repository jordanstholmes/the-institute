import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import VideoContainer from '../client/containers/VideoContainer';
import QuizContainer from '../client/containers/QuizContainer';
import store from '../client/store';

const theme = {
  font: 'Arial, Helvetica, sans-serif',
};

const App = () => (
  <div>
    <VideoContainer />
    <QuizContainer />
  </div>
);

const ReactComponents = (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
);

export default ReactComponents;
