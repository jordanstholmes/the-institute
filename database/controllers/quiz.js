const Quiz = require('../models/quiz.js');

const getQuizByName = quizName => new Promise((resolve, reject) => {
  Quiz.findById({ _id: quizName }, (err, response) => {
    if (err) return reject(err);
    return resolve(response);
  });
});

module.exports = getQuizByName;
