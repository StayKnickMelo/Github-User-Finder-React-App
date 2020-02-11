import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const UserItem = ({ user }) => {

  const { login, avatar_url } = user;

  return (

    <div className="card text-center">
      <img className="round-img" src={avatar_url} alt="" />
      <h1 style={{ color: '#fff' }}>{login}</h1>
      <Link to={`user/${login}`} className="btn btn-dark">See Profile</Link>
    </div>
  )

}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}


export default UserItem;
