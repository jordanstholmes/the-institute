import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import HomeIcon from './HomeIcon';
import SettingsIcon from './SettingsIcon';

const CenterVertically = styled.div`
  display: flex;
  align-items: center;
`;

const CenteredPaddedChildren = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-left: 20px;
  }
`;

const ModuleTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.accentColor};
`;

const NavBarContentSplitTwoSides = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.contrastColor};
  padding: 0 30px;
  height: 66px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(45deg);
  }
`;

const Rotate = styled.div`
  :hover {
    animation: ${rotate} 500ms linear;
  }
`;


const MainNavElement = styled.div`
  margin-right: 20px;
  width: 70px;
  text-align: center;

  cursor: pointer;
  :hover {
    color: ${props => props.theme.accentColor};
  }

  transition-duration: 500ms;
  transition-property: color;
`;

const NavBar = ({ subModuleTitle }) => (
  <NavBarContentSplitTwoSides>
    <CenteredPaddedChildren>
      <Rotate><img src="gear40px-min.svg" alt="logo" /></Rotate>
      <ModuleTitle>The high art of getting appointments</ModuleTitle>
      <div>{'>'}</div>
      <div>{subModuleTitle}</div>
    </CenteredPaddedChildren>
    <CenterVertically>
      <HomeIcon />
      <SettingsIcon />
    </CenterVertically>
  </NavBarContentSplitTwoSides>
);

NavBar.propTypes = {
  subModuleTitle: PropTypes.string.isRequired,
};

export default NavBar;
