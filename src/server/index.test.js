import request from 'supertest';
import app from './app';
import { db } from '../../database';

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

  it('responds with json', () => request(app)
    .get('/videos/10')
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200));
});
