import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VideoList = (props) => {
  const { videos } = props;
  return (
    videos.map(video => <div></div>);
  );
};