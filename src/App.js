import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/layout/Nav';

import Users from './components/users/Users';

import Search from './components/users/Search';

import Alert from './components/layout/Alert';

import About from './components/layout/About';

import User from './components/users/User';

import GithubState from './context/github/Githubstate';

import AlertState from './context/alert/AlertState';

const App = () => {

  
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Nav title="UserFinder" icon='fab fa-github' />
            <div className="container">
              <Alert/>
              <Switch>
                <Route exact path='/' render={() => (
                  <Fragment>
                    {/* {alert !== null && <Alert alert={alert} />} */}
                    <Search
                    
                    />
                    <Users />
                  </Fragment>
                )} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:username' component={User} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

App.defaultProps = {
  title: 'GithubFinder',
  icon: 'fab fa-github'
}

export default App;
