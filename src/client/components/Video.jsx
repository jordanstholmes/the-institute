import React from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.div`
  margin: 20px;
  width: 500px;
  display: flex;
  justify-content: space-around;
`

class Video extends React.Component {
  componentDidMount() {
    const { fetchVideo } = this.props;
    fetchVideo();
  }

  render() {
    const { title, source, fetchVideo } = this.props;
    return (
      <Wrapper>
        <h1>{title}</h1>
        <ReactPlayer url={source} playing={false} width="800px" height="450px" />
        <Nav>
          <button type="button" onClick={fetchVideo}>Previous</button>
          <button type="button" onClick={fetchVideo}>Next</button>
        </Nav>
      </Wrapper>
    );
  }
}

Video.propTypes = {
  source: PropTypes.string.isRequired,
  fetchVideo: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Video;
