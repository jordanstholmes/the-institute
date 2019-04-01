import React from 'react';

import styled from 'styled-components';

const SVG = styled.svg`
  cursor: pointer;
  :hover {
    fill: #eee8aa;
  }
  transition-duration: 300ms;
  transition-property: fill, stroke;
`;

const SettingsIcon = () => (
    <SVG xmlns="http://www.w3.org/2000/svg" fill="#fff" width="20pt" height="22pt" viewBox="0 0 20 22">
      <path d="M 1.429688 19.25 L 4.285156 19.25 L 4.285156 15.125 L 1.429688 15.125 Z M 4.285156 2.75 L 1.429688 2.75 L 1.429688 9.625 L 4.285156 9.625 Z M 11.429688 2.75 L 8.570312 2.75 L 8.570312 5.5 L 11.429688 5.5 Z M 0 13.75 L 5.714844 13.75 L 5.714844 11 L 0 11 Z M 8.570312 19.25 L 11.429688 19.25 L 11.429688 11 L 8.570312 11 Z M 7.144531 9.625 L 12.855469 9.625 L 12.855469 6.875 L 7.144531 6.875 Z M 18.570312 2.75 L 15.714844 2.75 L 15.714844 11 L 18.570312 11 Z M 14.285156 12.375 L 14.285156 15.125 L 20 15.125 L 20 12.375 Z M 15.714844 19.25 L 18.570312 19.25 L 18.570312 16.5 L 15.714844 16.5 Z M 15.714844 19.25"
      />
    </SVG>
);

export default SettingsIcon;