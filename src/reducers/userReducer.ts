import {
  UPDATE_USER_LIST,
  MARK_USER_AUTHENTICATED,
  SET_AUTHENTICATED_USER_INFO,
  SET_CURRENT_USER_VIEW
} from '../actions/actionTypes';
import { User, UserActionTypes } from '../interfaces/SetUser.interface';

const initialState: User = {
  login: '',
  avatar_url: '',
  bio: '',
  isAuthenticated: false,
  id: -1
};

export default (state = initialState, action: UserActionTypes) => {
  switch (action.type) {
    case MARK_USER_AUTHENTICATED:
      return { ...state, isAuthenticated: true };
    case UPDATE_USER_LIST:
      return { ...state, user: action.users };
    case SET_AUTHENTICATED_USER_INFO:
      return { ...state, userList: action.user };
    case SET_CURRENT_USER_VIEW:
      return { ...state, user: action.user };
    default:
      return state;
  }
};
