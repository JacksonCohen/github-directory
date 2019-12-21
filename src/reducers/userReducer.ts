import {
  UPDATE_USER_LIST,
  SET_AUTHENTICATED_USER_INFO,
  SET_CURRENT_USER_VIEW
} from '../actions/actionTypes';
import User from '../interfaces/User.interface';
import { UserActionTypes } from '../interfaces/SetUser.interface';

let initialState: User = {
  login: '',
  avatar_url: '',
  bio: ''
};

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case UPDATE_USER_LIST:
    // return { ...state, user: action.users };
    case SET_AUTHENTICATED_USER_INFO:
    // return { ...state, userList: action.user };
    case SET_CURRENT_USER_VIEW:
    // return { ...state, user: action.user };
    default:
      return state;
  }
};
