import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Video = ({ fetchVideo, title, source }) => (
  <Wrapper>
    <h1>{title}</h1>
    <ReactPlayer url={source} playing={false} width="800px" height="450px" />
    <button type="button" onClick={fetchVideo}>Switch</button>
  </Wrapper>
);


Video.propTypes = {
  // switchVideo: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
  fetchVideo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Video;
