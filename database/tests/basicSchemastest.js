const db = require('../index.js');
const Video = require('../models/video.js');
const Quiz = require('../models/quiz.js');
const User = require('../models/user.js');

const mockQuizData = require('./dummyData/quiz.json');
const mockUserData = require('./dummyData/user.json');
const mockVideoData = require('./dummyData/video.json');

Quiz.create(mockQuizData, (err, result) => {
  if (err) return console.error(err);
  return console.log(result);
});

User.create(mockUserData, (err, result) => {
  if (err) return console.error(err);
  return console.log(result);
});

Video.create(mockVideoData, (err, result) => {
  if (err) return console.error(err);
  return console.log(result);
});
