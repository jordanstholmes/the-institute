import videoReducer from './videoReducer';
import * as types from '../actions/ActionTypes';
import * as actions from '../actions/Actions';

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
  it('Does not change state on REQUEST_VIDEO action', () => {
    const firstState = videoReducer({ title: 'I am a test' }, {});
    expect(videoReducer(firstState, types.REQUEST_VIDEO)).toEqual(firstState);
  });
  it('Updates the "video" state on RECEIVE_VIDEO', () => {
    const defaultState = videoReducer(undefined, {});
    const newVideo = {
      _id: '54759eb3c090d83494e2d804',
      id: 10,
      title: 'I am a title!',
      source: 'https://player.vimeo.com/video/109259708?title=0&byline=0&portrait=0',
      moduleNum: 6,
      submoduleNum: 2,
    };

    expect(defaultState).not.toEqual(newVideo);
    const newState = videoReducer(defaultState, actions.receiveVideo(newVideo));
    expect(newState).toEqual(newVideo);
  });
});
