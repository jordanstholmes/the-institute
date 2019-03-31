/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import VideoContainer from './containers/VideoContainer';
// import QuizContainer from './containers/QuizContainer';
import NavBarContainer from './containers/NavBarContainer';
import VideoList from './components/VideoList';
import store from './store';

import GlobalStyle from './components/styledGlobalStyles';

const theme = {
  primaryFont: 'Arial, Helvetica, sans-serif',
  primaryColor: '#ee2d24',
  contrastColor: 'white',
};

const RowLayout = styled.div`
  display: flex;
  padding: 15px 0;

  > * {
    margin: 0 15px;
  }
`;

const App = () => (
  <div>
    <GlobalStyle />
    <NavBarContainer />
    <RowLayout>
      <VideoContainer />
      <VideoList />
    </RowLayout>
    {/* <QuizContainer /> */}
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
