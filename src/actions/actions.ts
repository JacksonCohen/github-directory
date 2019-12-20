import * as types from './actionTypes';

export const updateSearchCriteria = (e: any) => ({
  type: types.UPDATE_SEARCH_CRITERIA,
  payload: e.target.value
});

export const setAuthenticatedUserInfo = (user: object) => ({
  type: types.SET_AUTHENTICATED_USER_INFO,
  payload: user
});

export const setCurrentUserView = (user: object) => ({
  type: types.SET_CURRENT_USER_VIEW,
  payload: user
});

export const updateUserList = (users: Array<object>) => ({
  type: types.UPDATE_USER_LIST,
  payload: users
});

export const showUserModal = () => ({ type: types.SHOW_USER_MODAL });

export const hideUserModal = () => ({ type: types.HIDE_USER_MODAL });
