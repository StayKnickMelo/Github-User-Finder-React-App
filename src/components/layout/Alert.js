import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Alert extends Component {

  static propTypes = {
    msg: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }
  render() {

    const {msg, type} = this.props.alert;
    return (
      <div className ={`alert alert-${type}`}>
        <i className='fas fa-exclamation-circle'></i> {msg}
      </div>
    )
  }
}

export default Alert
