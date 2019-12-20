import { ShowModalAction, HideModalAction } from '../interfaces/Modal.interface';
import { UpdateSearchCriteriaAction } from '../interfaces/Search.interface';
import {
  SetUserAction,
  SetAuthenticatedUserInfoAction,
  SetCurrentUserViewAction,
  UpdateUserListAction
} from '../interfaces/SetUser.interface';

export const SET_USER: string = 'SET_USER';
export const UPDATE_SEARCH_CRITERIA: string = 'UPDATE_SEARCH_CRITERIA';
export const SET_AUTHENTICATED_USER_INFO: string = 'SET_AUTHENTICATED_USER_INFO';
export const SET_CURRENT_USER_VIEW: string = 'SET_CURRENT_USER_VIEW';
export const UPDATE_USER_LIST: string = 'UPDATE_USER_LIST';
export const SHOW_USER_MODAL: string = 'SHOW_USER_MODAL';
export const HIDE_USER_MODAL: string = 'HIDE_USER_MODAL';

export type UserActionTypes =
  | SetUserAction
  | SetAuthenticatedUserInfoAction
  | SetCurrentUserViewAction
  | UpdateUserListAction;
export type ModalActionTypes = ShowModalAction | HideModalAction;
export type SearchCriteriaActionTypes = UpdateSearchCriteriaAction;

export type AppActions = UserActionTypes | ModalActionTypes | SearchCriteriaActionTypes;
