import { shallow } from 'enzyme';
import React from 'react';
import SimpleDog from './SimpleDog';

describe('That dog stuff', () => {
  it('renders three dogs', () => {
    const wrapper = shallow(<SimpleDog />);
    expect(wrapper.find('.dog').length).toBe(3);
  });
});
