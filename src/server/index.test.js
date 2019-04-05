import request from 'supertest';
// import express from 'express';
import app from './app';
import { db } from '../../database';

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

/*
I want to test my api routes. What CAN I test?
- Sends json
- GET sends 200 status code
- On error sends correct error code
*/

describe('GET /videos/:videoId', () => {
  afterAll(() => {
    db.close();
  });

  it('responds with json', () => {
    return request(app)
      .get('/videos/5c06c63a585ed5090417a6de')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
  });
});
