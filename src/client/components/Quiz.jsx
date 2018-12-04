import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Question from './Question';

class Quiz extends React.Component {
  componentDidMount() {
    const { fetchQuiz } = this.props;
    fetchQuiz();
  }

  render() {
    console.log('log quiz props', this.props);
    const { title, questions } = this.props;
    console.log('log the questions:', questions);
    return (
      <div>
        <h1>{title}</h1>
        {questions.map(question => <Question question={question} key={question._id} />)}
      </div>
    );
  }
}

// const Quiz = ({ title, questions }) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       {questions.map(question => <Question question={question} key={question._id} />)}
//     </div>
//   );
// };

export default Quiz;
