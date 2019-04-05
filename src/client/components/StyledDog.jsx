import React from 'react';
import styled from 'styled-components';

const dogs = ['pal', 'buddy', 'baby'];

const Div = styled.div`
  color: red;
`;

const StyledDog = () => {
  const dogDivs = dogs.map(dog => <Div key={dog} className="dog">{dog}</Div>);
  return (
    <div className="dogWrapper">
      {dogDivs}
    </div>
  );
};

export  { StyledDog, Div };
