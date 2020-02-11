import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_ALERT
} from '../types';


export default (state, action)=> {

  switch(action.type){
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      }
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload
      }
    case CLEAR_USERS:
      return {
        ...state,
        users: []
      }
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      }

    default: 
    return state;
  }

}