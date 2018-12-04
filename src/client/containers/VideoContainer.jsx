import { connect } from 'react-redux';
import { changeVideoSource } from '../actions/actions';
import Video from '../components/Video';

const mapStateToProps = state => ({ source: state.source });
const mapDispatchToProps = dispatch => ({ switchVideo: () => dispatch(changeVideoSource()) });

const VideoContainer = connect(mapStateToProps, mapDispatchToProps)(Video);

export default VideoContainer;
