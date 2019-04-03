import React, { Component } from 'react';
import styled from 'styled-components';

const StyledTooltip = styled.span`
  color: red;
`;

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
  }

  render() {
    const { message, position } = this.props;

    return (
      <StyledTooltip>One day I will be a tooltip</StyledTooltip>
    );
  }
}

export default Tooltip;
