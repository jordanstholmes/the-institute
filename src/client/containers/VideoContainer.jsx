import { connect } from 'react-redux';
import { fetchVideo } from '../actions/Actions';
import Video from '../components/Video';

const mapStateToProps = state => ({
  source: state.video.source,
});

const mapDispatchToProps = dispatch => ({ fetchVideo: videoId => dispatch(fetchVideo(videoId)) });

const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Video);

export default VideoContainer;
