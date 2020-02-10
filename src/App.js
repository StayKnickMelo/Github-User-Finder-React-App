import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';

import Nav from './components/layout/Nav';

import Users from './components/users/Users';

import Search from './components/users/Search';

import Alert from './components/layout/Alert';

import About from './components/layout/About';

import User from './components/users/User';


class App extends Component {

  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null
  }


  // Search Users

  searchUsers = async (user) => {

    this.setState({ loading: true });


    const res = await axios(`https://api.github.com/search/users?q=${user}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });

  }

  // Search A Single User
  searchUser = async (user) => {
    this.setState({ loading: true });

    const res = await axios(`https://api.github.com/users/${user}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ loading: false, user: res.data });

  }

  // Search User Repos
  searchRepos = async (user) => {
    this.setState({ loading: true });

    const res = await axios(`https://api.github.com/users/${user}/repos?per_page=5&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ loading: false, repos: res.data });




  }

  // Clear Users
  clearUsers = () => {
    this.setState({ users: [] });
  }

  // Show alert
  showAlert = (msg, type) => {

    this.setState({ alert: { msg, type } });

    setTimeout(() => {
      this.setState({ alert: null })
    }, 2000);

  }

  static defaultProps = {
    title: 'GithubFinder',
    icon: 'fab fa-github'
  }

  render() {

    const { users, user, loading, repos } = this.state;

    return (
      <Router>
        <div className="App">
          <Nav title="UserFinder" icon='fab fa-github' />
          <div className="container">
            {/* {this.state.alert !== null && <Alert alert={this.state.alert} />} */}
            <Switch>
              <Route exact path='/' render={() => (
                <Fragment>
                  {this.state.alert !== null && <Alert alert={this.state.alert} />}
                  <Search
                    searchUsers={this.searchUsers}
                    clearUsers={this.clearUsers}
                    showClear={this.state.users.length > 0 ? true : false}
                    showAlert={this.showAlert}
                  />
                  <Users users={users} loading={loading} />
                </Fragment>
              )} />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:username' render={(props) => (
                <User searchUser={this.searchUser} {...props} user={user} loading={loading} searchRepos={this.searchRepos} repos={repos} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
