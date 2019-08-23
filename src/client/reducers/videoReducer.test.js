import videoReducer from './videoReducer';
import * as types from '../actions/ActionTypes';

describe('Video reducer', () => {
  it('Defaults to a state with no information', () => {
    const defaultState = videoReducer(undefined, {});
    const emptyState = {
      id: undefined,
      title: '',
      source: '',
      moduleNum: undefined,
      submoduleNum: undefined,
    };
    expect(defaultState).toEqual(emptyState);
  });
  it('Returns the same state on REQUEST_VIDEO action', () => {
    const firstState = videoReducer({ title: 'I am a test' }, {});
    expect(videoReducer(firstState, types.REQUEST_VIDEO)).toEqual(firstState);
  });
});
