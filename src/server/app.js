import morgan from 'morgan';
import express from 'express';
import * as Controller from './controller';

const app = express();
const logging = process.env.NODE_ENV === 'production' ? morgan('short') : morgan('dev');

app.use(logging);

app.get('/', Controller.rootReact);

app.use(express.static('public'));

app.get('/videos/:videoId', Controller.getVideoById);

app.get('/quizzes/:quizId', Controller.getQuizById);

export default app;
