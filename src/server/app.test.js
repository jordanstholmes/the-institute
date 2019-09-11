import request from 'supertest';
import app from './app';
import { db } from '../../database';

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
