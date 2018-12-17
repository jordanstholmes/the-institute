import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.li`
  flex-direction: column;
  align-items: flex-start;
`;

const AnswerOptionsList = styled.ul`
  list-style-type: lower-latin;
`;

const ListItem = styled.li`
  cursor: pointer;
  :hover {
    color: red;
  }
`;

const Question = ({ question }) => (
  <Wrapper>
    <h2>{question.questionText}</h2>
    <AnswerOptionsList>
      {question.answerOptions.map((option, idx) => <ListItem key={idx}>{option}</ListItem>)}
    </AnswerOptionsList>
  </Wrapper>
);

Question.propTypes = {
  question: PropTypes.shape({
    questionText: PropTypes.string,
    answerOptions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};


export default Question;
