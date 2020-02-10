import React, { useEffect } from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const User = (props) => {

  const { match, searchUser, user, loading, searchRepos, repos } = props;

  const {
    avatar_url,
    bio,
    blog,
    followers,
    following,
    hireable,
    location,
    name,
    html_url,
    company,
    public_repos,
    public_gists
  } = user;

  const username = match.params.username;

  useEffect(() => {
    searchUser(username);
    searchRepos(username);
    // eslint-disable-next-line
  }, []);




  return (
    loading ?
      <Spinner />
      :
      <div style={{ color: '#fff', height: '100vh' }}>
        <Link to='/' className='btn btn-light'> <i className="fas fa-arrow-circle-left"></i> Back to Search</Link>
      
        <div className=" card card-user grid-2">
          <div style={{display: 'flex', flexDirection:'column', justifyContent:'space-between', alignItems:'center'}} >
            <img className='round-img' style={{ width: '300px' }} src={avatar_url} alt="" />
            <h3>Name: {name}</h3>
            {company && <h3>Company: {company}</h3>}
            {location && <h3>Location: {location} </h3>}
            {blog && <h3>Website: {blog}</h3>}
            <h3 className='badge badge-lg'>Hireable: {' '} {hireable ? <i className='far fa-check-circle text-success'></i> : <i className='fas fa-times text-danger'></i> }  </h3> 
            <h3>
              <a className='badge badge-lg badge-primary' target='_blank' href={html_url}> Visit Github Page</a>
            </h3>
          </div>
          <div style={styleBio} >
            {bio &&
              <div>
                <h3>Bio:</h3>
                <p>{bio}</p>
              </div>}
            <div style={{display: 'flex', justifyContent:'space-between'}}>
              <div className="badge badge-primary">Followers: {followers}</div>
              <div className="badge badge-success">Following: {following}</div>
              <div className="badge badge-coral">Repos: {public_repos}</div>
              <div className="badge badge-ligth">Gists: {public_gists}</div>
            </div>
            <div>
              <h3 style={{textAlign: 'center', marginTop: '.5rem'}}>Repos </h3>
              {repos.map(repo => (
                <div key={repo.id} className='repo'>
                  <a target='_blank' href={repo.html_url}>{repo.name}</a>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
  )
}

User.propTypes = {
  loading: PropTypes.bool,
  user: PropTypes.object.isRequired,
  searchUser: PropTypes.func.isRequired,
  searchRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,
}


const styleBio = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'

}

export default User
