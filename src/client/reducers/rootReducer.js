import { CHANGE_VIDEO_SOURCE } from '../actions/actions';

const video1 = 'https://player.vimeo.com/video/109855756?color=ff0179&title=0&byline=0&portrait=0';
const video2 = 'https://player.vimeo.com/video/109259708?title=0&byline=0&portrait=0';

export default function (state = { source: video1 }, action) {
  switch (action.type) {
    case CHANGE_VIDEO_SOURCE:
      return { source: state.source === video1 ? video2 : video1 };
    default:
      return state;
  }
}
