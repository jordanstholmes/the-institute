import { shallow } from 'enzyme';
import React from 'react';
import { StyledDog, Div } from './StyledDog';

describe('Styled dog stuff', () => {
  it('renders three dogs', () => {
    const wrapper = shallow(<StyledDog />);
    expect(wrapper.children().find(Div).length).toBe(3);
  });
});
