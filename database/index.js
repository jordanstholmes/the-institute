const mongoose = require('mongoose');
const Controller = require('./controller');

const DB = process.env.DB || 'institute';
const HOST = process.env.DB_HOST || 'localhost';

mongoose.connect(`mongodb://${HOST}/${DB}`, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoose connection error:'));
db.on('open', () => console.log(`connected to Mongo '${DB}' on HOST: ${HOST}`));

module.exports = { Controller, db };
