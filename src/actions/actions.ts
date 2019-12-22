import * as types from './actionTypes';
import { User } from '../interfaces/SetUser.interface';

export const updateSearchCriteria = (criteria: string): types.AppActions => ({
  type: types.UPDATE_SEARCH_CRITERIA,
  criteria
});

export const setAuthenticatedUserInfo = (user: User): types.AppActions => ({
  type: types.SET_AUTHENTICATED_USER_INFO,
  user
});

export const markUserAuthenticated = (): types.AppActions => ({
  type: types.MARK_USER_AUTHENTICATED,
  isAuthenticated: true
});

export const setCurrentUserView = (user: User): types.AppActions => ({
  type: types.SET_CURRENT_USER_VIEW,
  user
});

export const updateUserList = (users: User[]): types.AppActions => ({
  type: types.UPDATE_USER_LIST,
  users
});

export const showUserModal = () => ({ type: types.SHOW_USER_MODAL });

export const hideUserModal = () => ({ type: types.HIDE_USER_MODAL });
