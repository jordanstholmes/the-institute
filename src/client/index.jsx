/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import VideoContainer from './containers/VideoContainer';
import store from './store/store';

ReactDom.render(<VideoContainer store={store} />, document.getElementById('app'));
