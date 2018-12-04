import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Question = ({ question }) => (
  <Wrapper>
    <h2>{question.questionText}</h2>
    <ul>
      {question.answerOptions.map((option, idx) => <div key={idx}>{option}</div>)}
    </ul>
  </Wrapper>
);

Question.propTypes = {
};


export default Question;
