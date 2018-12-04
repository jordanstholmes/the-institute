import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';


const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

const Video = ({ switchVideo, source }) => (
  <Wrapper>
    <ReactPlayer url={source} playing={false} width="800px" height="450px" />
    <button type="button" onClick={switchVideo}>Switch</button>
  </Wrapper>
);


Video.propTypes = {
  switchVideo: PropTypes.func.isRequired,
  source: PropTypes.string.isRequired,
};

export default Video;

// export default class Video extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       source: video1,
//     };
//     this.switchVideo = this.switchVideo.bind(this);
//   }

//   switchVideo() {
//     const { source } = this.state;
//     const newSource = source === video1 ? video2 : video1;
//     this.setState({ source: newSource });
//   }

//   render() {
//     const { source } = this.state;
//     return (
//       <Wrapper>
//         <ReactPlayer url={source} playing={false} width="800px" height="450px" />
//         <button type="button" onClick={this.switchVideo}>Switch</button>
//       </Wrapper>
//     );
//   }
// }
