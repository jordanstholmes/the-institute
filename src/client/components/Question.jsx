import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Question = ({ questionText, answerOptions }) => (
  <Wrapper>
    <h2>{questionText}</h2>
    <ul>
      {answerOptions.map((option, idx) => <div key={idx}>{option}</div>)}
    </ul>
  </Wrapper>
);

Question.propTypes = {
  questionText: PropTypes.string.isRequired,
};


export default Question;

/*
Store Shape:
{
  video: {
    title: String,
    source: String,
    quiz_id: string
  },
  quiz: {
    title: String,
    questions: [
      {
        questionText: String
        answerOptions: [strings]
        answer: [strings]
      }
    ]
  }
}
*/