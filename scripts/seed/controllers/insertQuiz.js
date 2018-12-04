const Quiz = require('../models/quiz');

const insertQuiz = quiz => new Promise((resolve, reject) => {
  Quiz.create(quiz, (err, response) => {
    if (err) return reject(err);
    return resolve(response);
  });
});

module.exports = insertQuiz;
