import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  background-color: #ee2d24;
  color: white;
  align-items: center;
  padding: 0 30px;
  font-family: ${props => props.theme.font};
`;

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

const NavBar = ({ moduleTitle, subModuleTitle }) => (
  <Wrapper>
    <VerticalCenterWrapper>
      <img src="nav-gear-white.png" alt="logo" />
      <LeftNavElement>{moduleTitle}</LeftNavElement>
      <LeftNavElement>{">"}</LeftNavElement>
      <LeftNavElement>{subModuleTitle}</LeftNavElement>
    </VerticalCenterWrapper>
    <div />
    <VerticalCenterWrapper>
      <MainNavElement>Modules</MainNavElement>
      <MainNavElement>Settings</MainNavElement>
      <MainNavElement>Logout</MainNavElement>
    </VerticalCenterWrapper>
  </Wrapper>
);

NavBar.propTypes = {
  moduleTitle: PropTypes.string.isRequired,
  subModuleTitle: PropTypes.string.isRequired,
};

export default NavBar;
