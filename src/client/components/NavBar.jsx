import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';


const RowLayout = styled.div`
  display: flex;
  padding: 15px 0;

  > * {
    margin: 0 15px;
  }
`;

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

const NavBarContentSplitTwoSides = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.contrastColor};
  padding: 0 30px;
  height: 60px;
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


const MainNavElement = styled.div`
  margin-right: 20px;
  width: 70px;
  text-align: center;

  cursor: pointer;
  :hover {
    color: #FCEDBF;
  }

  transition-duration: 500ms;
  transition-property: color;
`;

const NavBar = ({ subModuleTitle }) => (
  <NavBarContentSplitTwoSides>
    <CenteredPaddedChildren>
      <Rotate><img src="nav-gear-white.png" alt="logo" /></Rotate>
      <div>The high art of getting appointments</div>
      <div>{'>'}</div>
      <div>{subModuleTitle}</div>
    </CenteredPaddedChildren>
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

/*
<CenterVertically>
      <Rotate>
        <img src="nav-gear-white.png" alt="logo" />
      </Rotate>
      <LeftNavElement>The high art of getting appointments</LeftNavElement>
      <LeftNavElement>{'>'}</LeftNavElement>
      <LeftNavElement>{

*/
