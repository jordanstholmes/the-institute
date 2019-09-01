import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

export const VideoPlaceHolder = () => <div style={{ backgroundColor: 'blue' }} width="900px" height="506px" />;

class Video extends React.Component {
  componentDidMount() {
    const { fetchVideo } = this.props;
    fetchVideo(20);
  }

  render() {
    const { source } = this.props;
    const Player = (
      <div>
        <ReactPlayer url={source} playing={false} width="900px" height="506px" />
      </div>
    );

    return (
      source
        ? Player
        : <VideoPlaceHolder />
    );
  }
}

Video.propTypes = {
  source: PropTypes.string.isRequired,
  fetchVideo: PropTypes.func.isRequired,
};

export default Video;
