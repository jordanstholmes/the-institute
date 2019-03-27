import styled from 'styled-components';

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

export { RowLayout, CenterVertically };
