import { connect } from 'react-redux';
import { fetchQuiz } from '../actions/Actions';
import Quiz from '../components/Quiz';

const hardCodedQuizId = '5c06c63a585ed5090417a6d7';

const mapStateToProps = state => ({
  title: state.quiz.title,
  questions: state.quiz.questions,
});

const mapDispatchToProps = dispatch => ({ fetchQuiz: () => dispatch(fetchQuiz(hardCodedQuizId)) });

const QuizContainer = connect(mapStateToProps, mapDispatchToProps)(Quiz);

export default QuizContainer;
