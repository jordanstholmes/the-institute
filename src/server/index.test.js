import request from 'supertest';
// import express from 'express';
import app from './index';

// const app = express();

// app.get('/user', (req, res) => {
//   res.status(200).json({ name: 'john' });
// });

// describe('GET /user', () => {
//   it('responds with json', (done) => {
//     request(app)
//       .get('/user')
//       .set('Accept', 'application/json')
//       .expect('Content-Type', /json/)
//       .expect(200, done);
//   });
// });

describe( 'GET /videos/:videoId', () => {
  it('responds with json', (done) => {
    request(app)
      .get('/vidoes/5c06c63a585ed5090417a6de')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
