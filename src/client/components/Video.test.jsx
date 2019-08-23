import { shallow } from 'enzyme';
import React from 'react';
import Video from './Video';
import { VideoPlaceHolder } from './Video';

describe('Video component', () => {
  it('renders a place-holder while fetching video data', () => {
    const wrapper = shallow(<Video source='' fetchVideo={() => {}}/>);
    expect(wrapper.type()).toEqual(VideoPlaceHolder);
  });
});