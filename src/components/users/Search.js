import React, {useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'

import AlertContext from '../../context/alert/alertContext';


const Search = () => {

  const githubContext = useContext(GithubContext);

  const alertContext = useContext(AlertContext);

  const { searchUsers, clearUsers, users} = githubContext;

  const {setAlert} = alertContext

  const [text, setText] = useState('');

  const onChange = (e) => {

    setText( e.target.value)

  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (text === '') {

      setAlert('Enter a user name', 'danger');

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
      {users.length > 0 && <button className="btn btn-block btn-primary" onClick={clearUsers}>Clear</button>}

    </div>
  )

}


export default Search
