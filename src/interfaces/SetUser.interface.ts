import {
  SET_USER,
  SET_AUTHENTICATED_USER_INFO,
  SET_CURRENT_USER_VIEW,
  UPDATE_USER_LIST
} from '../actions/actionTypes';
import User from '../interfaces/User.interface';

export interface SetUserAction {
  type: typeof SET_USER;
  user: User;
}

export interface SetAuthenticatedUserInfoAction {
  type: typeof SET_AUTHENTICATED_USER_INFO;
  user: User;
}

export interface SetCurrentUserViewAction {
  type: typeof SET_CURRENT_USER_VIEW;
  user: User;
}

export interface UpdateUserListAction {
  type: typeof UPDATE_USER_LIST;
  users: User[];
}
