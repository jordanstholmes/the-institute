import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';

import * as actions from './Actions';
import * as types from './ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  describe('requestVideo', () => {
    const urlRegEx = /\/videos\/[a-zA-A0-9]*/;

    afterEach(() => {
      fetchMock.restore();
    });

    it(`creates ${types.RECEIVE_VIDEO} when video has been fetched`, () => {
      const mockVid = { video: 'I am a mock vid!' };
      const store = mockStore({ video: {} });

      fetchMock.getOnce(urlRegEx, { body: mockVid });

      const expected = [
        { type: types.REQUEST_VIDEO },
        { type: types.RECEIVE_VIDEO, video: mockVid },
      ];

      return store.dispatch(actions.fetchVideo('someVidId')).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    it(`creates ${types.RECEIVE_VIDEO_FAILURE} on fetch failure`, () => {
      const store = mockStore({ video: {} });
      const err = new Error('failed to fetch');

      fetchMock.getOnce(urlRegEx, { throws: new Error('failed to fetch') });

      const expected = [
        { type: types.REQUEST_VIDEO },
        { type: types.RECEIVE_VIDEO_FAILURE, err },
      ];

      return store.dispatch(actions.fetchVideo('someVidId')).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });

  describe('requestQuiz', () => {
    const urlRegEx = /\/quizzes\/[a-zA-A0-9]*/;

    afterEach(() => {
      fetchMock.restore();
    });

    it(`creates ${types.RECEIVE_QUIZ} when quiz has been fetched`, () => {
      const mockQuiz = { quiz: 'I am a mock quiz!' };
      const store = mockStore({ quiz: {} });

      fetchMock.getOnce(urlRegEx, { body: mockQuiz });

      const expected = [
        { type: types.REQUEST_QUIZ },
        { type: types.RECEIVE_QUIZ, quiz: mockQuiz },
      ];

      return store.dispatch(actions.fetchQuiz('someQuizId')).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });


    it(`creates ${types.RECEIVE_QUIZ_FAILURE}`, () => {
      const store = mockStore({ quiz: {} });
      const err = new Error('failed to fetch');

      fetchMock.getOnce(urlRegEx, { throws: new Error('failed to fetch') });

      const expected = [
        { type: types.REQUEST_QUIZ },
        { type: types.RECEIVE_QUIZ_FAILURE, err },
      ];

      return store.dispatch(actions.fetchQuiz('someQuizId')).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
