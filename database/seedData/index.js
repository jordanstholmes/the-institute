const quizMock = require('./quiz.json');
const videoMocks = require('./video.json');

const { Controller, db } = require('../index');

db.dropDatabase()
  .then(() => Controller.insertQuiz(quizMock))
  .then(({ _id }) => {
    videoMocks[0].quiz_id = _id;
    videoMocks[1].quiz_id = _id;
    return Controller.insertVideo(videoMocks);
  })
  .then(() => {
    console.log('finished seeding!');
    db.close();
  })
  .catch((err) => {
    console.error(err);
    db.close();
  });
