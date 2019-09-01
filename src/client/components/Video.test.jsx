import { shallow } from 'enzyme';
import React from 'react';
import ReactPlayer from 'react-player';
import Video, { VideoPlaceHolder } from './Video';

describe('Video component', () => {
  it('renders a place-holder while fetching video data', () => {
    const wrapper = shallow(<Video source="" fetchVideo={() => {}} />);
    expect(wrapper.type()).toEqual(VideoPlaceHolder);
  });
  it('renders a video element', () => {
    const video = {
      _id: '5d65e5a85dd77500157989bd',
      id: 20,
      source: 'https://vimeo.com/33219961',
      title: 'Innovative zero tolerance intranet',
      moduleNum: 10,
      submoduleNum: 14,
      __v: 0,
    };
    const wrapper = shallow(<Video source={video.source} fetchVideo={() => {}} />);
    expect(wrapper.find(ReactPlayer).length).toBeGreaterThan(0);
  });
});
