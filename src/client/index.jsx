/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import VideoContainer from './containers/VideoContainer';
import NavBarContainer from './containers/NavBarContainer';
import VideoListContainer from './containers/VideoListContainer';
import store from './store';

import GlobalStyle from './components/styledGlobalStyles';

const theme = {
  primaryFont: 'Arial, Helvetica, sans-serif',
  primaryColor: '#ee2d24',
  contrastColor: 'white',
  accentColor: '#eee8aa',
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
      <VideoListContainer />
    </RowLayout>
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
