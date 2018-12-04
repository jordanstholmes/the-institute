import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
  questionText: String,
  answerOptions: [String],
  answer: [String],
});

const quizSchema = mongoose.Schema({
  title: String,
  questions: [questionSchema],
});

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;
