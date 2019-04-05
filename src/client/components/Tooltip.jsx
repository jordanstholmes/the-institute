import React, { Component } from 'react';
import styled from 'styled-components';

const tooltipColor = 'rgba(0,0,0,.7)';
const textColor = '#fff';

const StyledTooltip = styled.span`
  position: relative;
  cursor: pointer;
`;

const Trigger = styled.span`
  display: inline-block;
  text-decoration: underline;
`;

const Bubble = styled.div`
  min-width: 120px;
  max-width: 210px;
  position: absolute;
  z-index: 10;
  &::after {
    content: '';
    position: absolute;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    border-bottom: 9px solid ${tooltipColor};
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  top: 100%;
  left: 50%;
  padding-top: 9px;
  transform: translateX(-50%);
`;

const Message = styled.div`
  background: ${tooltipColor};
  border-radius: 3px;
  color: ${textColor};
  font-size: .75rem;
  line-height: 1.4;
  padding: .75em;
  text-align: center;
`;

class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
    };
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  hideTooltip() {
    this.setState({ display: false });
  }

  showTooltip() {
    this.setState({ display: true });
  }

  render() {
    const { message, children } = this.props;
    const { display } = this.state;

    return (
      <StyledTooltip onMouseLeave={this.hideTooltip}>
        {
          display
          && (
          <Bubble>
            <Message>{message}</Message>
          </Bubble>
          )
        }
        <Trigger onMouseOver={this.showTooltip}>
          {children}
        </Trigger>
      </StyledTooltip>
    );
  }
}

export default Tooltip;
