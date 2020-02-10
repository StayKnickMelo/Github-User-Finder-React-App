import React, {useState, useContext } from 'react';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext'

const Search = (props) => {

  const { showAlert, clearUsers, showClear } = props;

  const githubContext = useContext(GithubContext);

  const {searchUsers} = githubContext;

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
  
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  showAlert: PropTypes.func.isRequired,
}

export default Search
