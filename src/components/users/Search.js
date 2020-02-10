import React, { Component } from 'react';
import PropTypes from 'prop-types';




class Search extends Component {

  state = {
    text: ''
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    showAlert: PropTypes.func.isRequired,
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })

  }

  onSubmit = (e) => {
    e.preventDefault();

    if(this.state.text === ''){

      this.props.showAlert('Enter a user name', 'danger');

    }else {
      this.props.searchUsers(this.state.text);

      this.setState({ text: '' });

    }

    
  }

  // clearUsers = () => {
  //   console.log('CLEARED');
  //   this.props.clearUsers();
  // }

  render() {

    const { text } = this.state;

    const {showClear, clearUsers} = this.props;

    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input  onChange={this.onChange} type="text" name="text" placeholder="Search User" value={text} />
          <input  type="submit" value="Search" className="btn btn-block btn-dark " />
        </form>
        {showClear  && <button className="btn btn-block btn-primary" onClick={clearUsers}>Clear</button>  }
        
      </div>
    )
  }
}

export default Search
