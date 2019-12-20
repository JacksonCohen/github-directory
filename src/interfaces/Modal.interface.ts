import { SHOW_USER_MODAL, HIDE_USER_MODAL } from '../actions/actionTypes';

export interface Modal {
  isModalShowing: boolean;
}

export interface ShowModalAction {
  type: typeof SHOW_USER_MODAL;
  modal: Modal;
}

export interface HideModalAction {
  type: typeof HIDE_USER_MODAL;
  modal: Modal;
}

export type ModalActionTypes = ShowModalAction | HideModalAction;
