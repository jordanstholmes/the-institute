/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import Video from './components/Video';

const StyledHello = styled.h1`
  color: red;
`;

const HelloWorld = () => <StyledHello>Hello World</StyledHello>;

ReactDom.render(<Video />, document.getElementById('app'));
