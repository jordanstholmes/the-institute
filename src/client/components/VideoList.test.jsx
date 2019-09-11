import React from 'react';
import { shallow } from 'enzyme';

import VideoList from './VideoList';
import VideoListItem from './VideoListItem';

const mockData = [
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
];


describe('VideoList', () => {
  it('renders the correct number of VideoListItems', () => {
    const wrapper = shallow(<VideoList videos={mockData} />);
    expect(wrapper.children().find(VideoListItem).length).toEqual(2);
  });
});
