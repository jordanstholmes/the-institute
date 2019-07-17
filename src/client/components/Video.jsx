import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

class Video extends React.Component {
  componentDidMount() {
    const { fetchVideo } = this.props;
    fetchVideo(20);
  }

  render() {
    const { source } = this.props;
    return (
      <div>
        <ReactPlayer url={source} playing={false} width="900px" height="506px" />
      </div>
    );
  }
}

Video.propTypes = {
  source: PropTypes.string.isRequired,
  fetchVideo: PropTypes.func.isRequired,
};

export default Video;
