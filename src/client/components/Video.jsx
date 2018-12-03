import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';

const video1 = 'https://player.vimeo.com/video/109855756?color=ff0179&title=0&byline=0&portrait=0';
const video2 = 'https://player.vimeo.com/video/109259708?title=0&byline=0&portrait=0';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: video1,
    };
    this.switchVideo = this.switchVideo.bind(this);
  }

  switchVideo() {
    const { source } = this.state;
    const newSource = source === video1 ? video2 : video1;
    this.setState({ source: newSource });
  }

  render() {
    const { source } = this.state;
    return (
      <Wrapper>
        <ReactPlayer url={source} playing={false} width="800px" height="450px" />
        <button type="button" onClick={this.switchVideo}>Switch</button>
      </Wrapper>
    );
  }
}
