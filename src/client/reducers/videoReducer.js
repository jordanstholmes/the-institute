import { REQUEST_VIDEO, RECEIVE_VIDEO } from '../actions/ActionTypes';

const defaultVideo = {
  id: undefined,
  title: '',
  source: '',
  moduleNum: undefined,
  submoduleNum: undefined,
};

export default function (state = defaultVideo, action) {
  switch (action.type) {
    case REQUEST_VIDEO:
      return state;
    case RECEIVE_VIDEO:
      return action.video;
    default:
      return state;
  }
}
