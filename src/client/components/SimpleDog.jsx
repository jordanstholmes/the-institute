import React from 'react';

const dogs = ['pal', 'buddy', 'baby'];

const SimpleDog = () => {
  const dogDivs = dogs.map(dog => <div className="dog">{dog}</div>);
  return (
    <div className="dogWrapper">
      {dogDivs}
    </div>
  );
};

export default SimpleDog;
