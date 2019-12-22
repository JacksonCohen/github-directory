import { UserActionTypes } from '../interfaces/SetUser.interface';
import { ModalActionTypes } from '../interfaces/Modal.interface';
import { SearchCriteriaActionTypes } from '../interfaces/Search.interface';

export const UPDATE_SEARCH_CRITERIA = 'UPDATE_SEARCH_CRITERIA';
export const SET_AUTHENTICATED_USER_INFO = 'SET_AUTHENTICATED_USER_INFO';
export const MARK_USER_AUTHENTICATED = 'MARK_USER_AUTHENTICATED';
export const SET_CURRENT_USER_VIEW = 'SET_CURRENT_USER_VIEW';
export const UPDATE_USER_LIST = 'UPDATE_USER_LIST';
export const SHOW_USER_MODAL = 'SHOW_USER_MODAL';
export const HIDE_USER_MODAL = 'HIDE_USER_MODAL';

// create a dynamic type for data in reducers
export type AppActions = UserActionTypes | ModalActionTypes | SearchCriteriaActionTypes;
