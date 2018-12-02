import Quiz from '../models/quiz';

const getQuizByName = quizName => new Promise((resolve, reject) => {
  Quiz.findById({ _id: quizName }, (err, response) => {
    if (err) return reject(err);
    return resolve(response);
  });
});

export default getQuizByName;
