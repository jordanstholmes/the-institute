/* eslint-env browser */
import React from 'react';
import ReactDom from 'react-dom';

const HelloWorld = () => <h1>Hello World</h1>;

ReactDom.render(<HelloWorld />, document.getElementById('app'));
