import styled from 'styled-components';

const NavBarContentSplitTwoSides = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.primaryColor};
  color: ${props => props.theme.contrastColor};
  padding: 0 30px;
  height: 60px;
`;

export { NavBarContentSplitTwoSides };
