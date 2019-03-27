import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NavBarContentSplitTwoSides } from '../styled-components/basicNav';

const VerticalCenterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MainNavElement = styled.div`
  margin-right: 20px;
  width: 70px;
  text-align: center;
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;

const LeftNavElement = styled.div`
  margin-left: 20px;
`;

const NavBar = ({ subModuleTitle }) => (
  <NavBarContentSplitTwoSides>
    <VerticalCenterWrapper>
      <img src="nav-gear-white.png" alt="logo" />
      <LeftNavElement>The high art of getting appointments</LeftNavElement>
      <LeftNavElement>{">"}</LeftNavElement>
      <LeftNavElement>{subModuleTitle}</LeftNavElement>
    </VerticalCenterWrapper>
    <div />
    <VerticalCenterWrapper>
      <MainNavElement>Modules</MainNavElement>
      <MainNavElement>Settings</MainNavElement>
      <MainNavElement>Logout</MainNavElement>
    </VerticalCenterWrapper>
  </NavBarContentSplitTwoSides>
);

NavBar.propTypes = {
  subModuleTitle: PropTypes.string.isRequired,
};

export default NavBar;
