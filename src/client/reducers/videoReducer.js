import { REQUEST_VIDEO, RECEIVE_VIDEO } from '../actions/actions';

const video1 = 'https://player.vimeo.com/video/109855756?color=ff0179&title=0&byline=0&portrait=0';
const quizHash = '5c06c63a585ed5090417a6d7';
const defaultVideo = {
  title: '',
  source: video1,
  quiz_id: quizHash,
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
