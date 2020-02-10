import React, {useState } from 'react';
import PropTypes from 'prop-types';

const Search = (props) => {

  const { showAlert, searchUsers, clearUsers, showClear } = props

  const [text, setText] = useState('');

  const onChange = (e) => {

    setText( e.target.value)

  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {

      showAlert('Enter a user name', 'danger');

    } else {
      searchUsers(text);

      setText('');

    }


  }







  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input onChange={onChange} type="text" name="text" placeholder="Search User" value={text} />
        <input type="submit" value="Search" className="btn btn-block btn-dark " />
      </form>
      {showClear && <button className="btn btn-block btn-primary" onClick={clearUsers}>Clear</button>}

    </div>
  )

}

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired,
}

export default Search
