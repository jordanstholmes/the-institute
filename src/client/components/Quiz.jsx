import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Question from './Question';

const Wrapper = styled.section`
  width: 100%;
`;

const InnerWrapper = styled.section`
  margin: 0 15%;
`;

class Quiz extends React.Component {
  componentDidMount() {
    const { fetchQuiz } = this.props;
    fetchQuiz();
  }

  render() {
    const { title, questions } = this.props;
    return (
      <Wrapper>
        <InnerWrapper>
          <h1>{title}</h1>
          {questions.map(question => <Question question={question} key={question._id} />)}
        </InnerWrapper>
      </Wrapper>
    );
  }
}

Quiz.propTypes = {
  title: PropTypes.string.isRequired,
  fetchQuiz: PropTypes.func.isRequired,
  questions: PropTypes.string.isRequired,
};

export default Quiz;
