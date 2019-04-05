import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import VideoListItem from './VideoListItem';

const mock = [
  {
    title: '9.5 Getting Past the Gatekeeper',
    source: 'https://player.vimeo.com/video/109855756?color=ff0179&title=0&byline=0&portrait=0',
    _id: '123',
  },
  {
    title: '4.1 The Got-A-Minute Manager',
    source: 'https://player.vimeo.com/video/109259708?title=0&byline=0&portrait=0',
    _id: '456',
  },
  {
    title: '5.3 I am a fake title',
    source: 'https://player.vimeo.com/video/109259708?title=0&byline=0&portrait=0',
    _id: '456',
  },
];

const Div = styled.div`
  height: 506px;
  width: 100%;
  background-color: #e7e6e6;
`;

const VideoList = ({ videos }) => (
  <Div>
    {mock.map(video => <VideoListItem key={video._id} video={video} />)}
  </Div>
);

export default VideoList;
