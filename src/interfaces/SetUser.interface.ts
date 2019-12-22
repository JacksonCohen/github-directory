import {
  SET_AUTHENTICATED_USER_INFO,
  MARK_USER_AUTHENTICATED,
  SET_CURRENT_USER_VIEW,
  UPDATE_USER_LIST
} from '../actions/actionTypes';
import User from '../interfaces/User.interface';

export interface SetAuthenticatedUserInfoAction {
  type: typeof SET_AUTHENTICATED_USER_INFO;
  user: User;
}

export interface MarkUserAuthenticated {
  type: typeof MARK_USER_AUTHENTICATED;
  isAuthenticated: boolean;
}

export interface SetCurrentUserViewAction {
  type: typeof SET_CURRENT_USER_VIEW;
  user: User;
}

export interface UpdateUserListAction {
  type: typeof UPDATE_USER_LIST;
  users: User[];
}

export type UserActionTypes =
  | SetAuthenticatedUserInfoAction
  | MarkUserAuthenticated
  | SetCurrentUserViewAction
  | UpdateUserListAction;
