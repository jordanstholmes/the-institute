import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import 'isomorphic-fetch';

import * as actions from './Actions';
import * as types from './ActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Actions', () => {
  describe('async actions', () => {
    afterEach(() => {
      fetchMock.restore();
    });

    it('creates RECEIVE_VIDEO when video has been fetched', () => {
      const mockVid = { video: 'I am a mock vid!' };
      const store = mockStore({ video: {} });

      fetchMock.getOnce(/\/videos\/.*/, mockVid);

      const expected = [
        { type: types.REQUEST_VIDEO },
        { type: types.RECEIVE_VIDEO, video: mockVid },
      ];

      return store.dispatch(actions.fetchVideo('someVidId')).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
