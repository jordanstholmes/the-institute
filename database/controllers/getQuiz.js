import Quiz from '../models/quiz';

const getQuizById = quizId => new Promise((resolve, reject) => {
  Quiz.findById({ _id: quizId }, (err, response) => {
    if (err) return reject(err);
    return resolve(response);
  });
});

export default getQuizById;
