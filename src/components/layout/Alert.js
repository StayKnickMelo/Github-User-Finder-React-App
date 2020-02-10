import React from 'react';
import PropTypes from 'prop-types';


const  Alert =({alert:{msg, type}})=> {

    return (
      <div className ={`alert alert-${type}`}>
        <i className='fas fa-exclamation-circle'></i> {msg}
      </div>
    )
  
}

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Alert
