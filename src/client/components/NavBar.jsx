import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { NavBarContentSplitTwoSides } from '../styled-components/basicNavStyles';
import { CenterVertically } from '../styled-components/layoutStyles';

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
    <CenterVertically>
      <img src="nav-gear-white.png" alt="logo" />
      <LeftNavElement>The high art of getting appointments</LeftNavElement>
      <LeftNavElement>{">"}</LeftNavElement>
      <LeftNavElement>{subModuleTitle}</LeftNavElement>
    </CenterVertically>
    <CenterVertically>
      <MainNavElement>Modules</MainNavElement>
      <MainNavElement>Settings</MainNavElement>
      <MainNavElement>Logout</MainNavElement>
    </CenterVertically>
  </NavBarContentSplitTwoSides>
);

NavBar.propTypes = {
  subModuleTitle: PropTypes.string.isRequired,
};

export default NavBar;
