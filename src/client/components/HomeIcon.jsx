import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  cursor: pointer;
  :hover {
    fill: #eee8aa;
  }
  transition-duration: 300ms;
  transition-property: fill;
`;

const HomeIcon = () => (
  <SVG xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20pt" height="20pt" viewBox="0 0 20 20">
    <path d="M 16 256 L 256 64 L 352 136 L 352 104 L 400 104 L 400 176 L 496 256 L 448 256 L 448 448 L 328 448 L 328 288 L 232 288 L 232 448 L 64 448 L 64 256 Z M 16 256"
    transform="scale(.03906)" strokeWidth="12" strokeLinejoin="round"
    />
  </SVG>
);

export default HomeIcon;
