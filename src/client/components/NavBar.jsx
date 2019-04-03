import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import HomeIcon from './HomeIcon';
import SettingsIcon from './SettingsIcon';
import GearIcon from './GearIcon';

const LeftContentWrapper = styled.div`
  > * {
    margin-right: 20px;
  }
`;

const RightContentWrapper = styled.div`
  > * {
    margin-right: 40px;
  }
`;

const ModuleTitle = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 20px;
  text-transform: uppercase;
  color: ${props => props.theme.accentColor};
`;

const StyledNav = styled.div`
  height: 66px;
  padding: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    display: flex;
    align-items: center;
  }

  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.contrastColor};
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  animation: ${rotate} 10s linear infinite;
`;

const NavBar = ({ subModuleTitle }) => (
  <StyledNav>
    <LeftContentWrapper>
      <Rotate>
        <GearIcon />
      </Rotate>
      <ModuleTitle>The high art of getting appointments</ModuleTitle>
      <div>{'>'}</div>
      <div>{subModuleTitle}</div>
    </LeftContentWrapper>
    <RightContentWrapper>
      <HomeIcon />
      <SettingsIcon />
    </RightContentWrapper>
  </StyledNav>
);

NavBar.propTypes = {
  subModuleTitle: PropTypes.string.isRequired,
};

export default NavBar;
