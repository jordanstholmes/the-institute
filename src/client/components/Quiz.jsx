import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Quiz = ({ quiz }) => {

  return (
    <div>
      <h1>{quiz.title}</h1>
    </div>
  );
};

export default Quiz;
