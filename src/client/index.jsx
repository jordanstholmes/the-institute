/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';

const StyledHello = styled.h1`
  color: red;
`;

const HelloWorld = () => <StyledHello>Hello World</StyledHello>;

ReactDom.render(<HelloWorld />, document.getElementById('app'));
