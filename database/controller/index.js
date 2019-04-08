const mongoose = require('mongoose');
const Model = require('../models');

const { ObjectId } = mongoose.Types;
const { Quiz, Video } = Model;

module.exports.getQuizById = quizId => Quiz.findById({ _id: quizId });

module.exports.insertQuiz = quiz => Quiz.create(quiz);

module.exports.getVideoById = videoId => Video.findById({ _id: ObjectId(videoId) });

module.exports.insertVideo = video => Video.create(video);
