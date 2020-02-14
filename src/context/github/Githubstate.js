import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';


let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

}


const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (user) => {

    setLoading()

    const res = await axios(`https://api.github.com/search/users?q=${user}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items
    })
   
  }

  const searchUser = async (user) => {

    setLoading()

    const res = await axios(`https://api.github.com/users/${user}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);

    dispatch({
      type: GET_USER,
      payload: res.data
    })

  }

  const searchRepos = async (user) => {

    setLoading()

    const res = await axios(`https://api.github.com/users/${user}/repos?per_page=5&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

    dispatch({
      type: GET_REPOS,
      payload: res.data
    })
   

  }

  const clearUsers = () => {

    dispatch({
      type: CLEAR_USERS
    })
  }

  const setLoading = ()=> {
    dispatch({
      type: SET_LOADING
    });
  }


  return <GithubContext.Provider
    value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      searchUsers,
      searchUser,
      searchRepos,
      setLoading,
      clearUsers
    }}>
      {props.children}

  </GithubContext.Provider>

}

export default GithubState;