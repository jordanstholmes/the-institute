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

// const VerticalCenterWrapper = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const MainNavElement = styled.div`
//   margin-right: 20px;
//   width: 70px;
//   text-align: center;
//   cursor: pointer;
//   :hover {
//     font-weight: bold;
//   }
// `;

// const LeftNavElement = styled.div`
//   margin-left: 20px;
// `;

export { NavBarContentSplitTwoSides };
