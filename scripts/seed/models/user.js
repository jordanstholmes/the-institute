const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const answerSchema = mongoose.Schema({
  question_id: ObjectId,
  answer: String,
});

const quizResultsSchema = mongoose.Schema({
  quiz_id: String,
  answers: [answerSchema],
});

const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  quizResults: [quizResultsSchema],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
