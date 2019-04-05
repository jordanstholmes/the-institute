import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import VideoListItem from './VideoListItem';

const Div = styled.div`
  height: 506px;
  width: 100%;
  background-color: #e7e6e6;
`;

const VideoList = ({ videos }) => (
  <div>
    {videos.map(video => <VideoListItem key={video._id} video={video} />)}
  </div>
);

export default VideoList;
