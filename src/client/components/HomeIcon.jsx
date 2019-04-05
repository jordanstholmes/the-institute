import React from 'react';
import styled from 'styled-components';

const SVG = styled.svg`
  :hover {
    fill: ${props => props.theme.accentColor};
  }
  transition-duration: 300ms;
  transition-property: fill;
`;

const HomeIcon = () => (
  <SVG
    width="20pt"
    height="20pt"
    fill="#fff"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      transform="scale(.03906)"
      d="m16 256l240-192 96 72v-32h48v72l96 80h-48v192h-120v-160h-96v160h-168v-192z"
      strokeLinejoin="round"
      strokeWidth="12"
    />
  </SVG>
);

export default HomeIcon;
