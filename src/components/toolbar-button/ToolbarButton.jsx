import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ToolbarButton.css';

export default class ToolbarButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  render() {
    const { onClick, label } = this.props;
    const { isActive } = this.state;
    return (
      <span
        className={`button ${isActive ? 'active' : ''}`}
        onMouseDown={event => {
          event.preventDefault();
          onClick();
          this.setState({ isActive: !isActive });
        }}
      >
        {label}
      </span>
    );
  }
}

ToolbarButton.props = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired
};
