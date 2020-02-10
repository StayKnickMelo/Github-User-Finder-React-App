import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Nav from './components/layout/Nav';

import Users from './components/users/Users';

import Search from './components/users/Search';

import Alert from './components/layout/Alert';

import About from './components/layout/About';

import User from './components/users/User';

import GithubState from './context/github/Githubstate';


const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  // Search Users

  

  // Search A Single User
  const searchUser = async (user) => {

    setLoading(true);

    const res = await axios(`https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setLoading(false);
    setUser(res.data);

  }

  // Search User Repos
  const searchRepos = async (user) => {

    setLoading(true);

    const res = await axios(`https://api.github.com/users/${user}/repos?per_page=5&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setLoading(false);
    setRepos(res.data);

  }

  // Clear Users
  const clearUsers = () => {

    setUsers([]);
  }

  // Show alert
  const showAlert = (msg, type) => {

    setAlert({ msg, type });

    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Nav title="UserFinder" icon='fab fa-github' />
          <div className="container">
            {/* {alert !== null && <Alert alert={alert} />} */}
            <Switch>
              <Route exact path='/' render={() => (
                <Fragment>
                  {alert !== null && <Alert alert={alert} />}
                  <Search
                    
                    clearUsers={clearUsers}
                    showClear={users.length > 0 ? true : false}
                    showAlert={showAlert}
                  />
                  <Users/>
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:username' render={(props) => (
                <User searchUser={searchUser} {...props} user={user} loading={loading} searchRepos={searchRepos} repos={repos} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

App.defaultProps = {
  title: 'GithubFinder',
  icon: 'fab fa-github'
}

export default App;
