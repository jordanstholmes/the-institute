import { connect } from 'react-redux';
import { fetchVideo } from '../actions/Actions';
import VideoList from '../components/VideoList';

const mapStateToProps = state => ({
  videos: [state.video],
});

const VideoContainer = connect(mapStateToProps)(VideoList);

export default VideoContainer;