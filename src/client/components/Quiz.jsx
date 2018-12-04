import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Question from './Question';

const Quiz = ({ quiz }) => {
  return (
    <div>
      <h1>{quiz.title}</h1>
      {quiz.questions.map(question => <Question question={question} key={question._id} />)}
    </div>
  );
};

export default Quiz;
