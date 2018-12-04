import { connect } from 'react-redux';
import { fetchVideo } from '../actions/actions';
import Video from '../components/Video';

const mapStateToProps = state => ({
  source: state.video.source,
  title: state.video.title,
});
// const mapDispatchToProps = dispatch => ({ switchVideo: () => dispatch(changeVideoSource()) });
const mapDispatchToProps = dispatch => ({ fetchVideo: () => dispatch(fetchVideo('5c06c63a585ed5090417a6de')) });

const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Video);

export default VideoContainer;
