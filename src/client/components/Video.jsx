import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      source: "https://player.vimeo.com/video/109855756?color=ff0179&title=0&byline=0&portrait=0",
    };
  }

  render() {
    const { source } = this.state;
    return (
    )
  }
}


