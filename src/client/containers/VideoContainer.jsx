import { connect } from 'react-redux';
import { fetchVideo } from '../actions/Actions';
import Video from '../components/Video';

const mapStateToProps = state => ({
  source: state.video.source,
});

const mapDispatchToProps = dispatch => ({ fetchVideo: () => dispatch(fetchVideo('5c06c63a585ed5090417a6de')) });

const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Video);

export default VideoContainer;
