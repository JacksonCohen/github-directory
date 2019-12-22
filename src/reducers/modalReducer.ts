import { SHOW_USER_MODAL, HIDE_USER_MODAL } from '../actions/actionTypes';
import { Modal, ModalActionTypes } from '../interfaces/Modal.interface';

const initialState: Modal = {
  isModalShowing: true
};

export default (state = initialState, action: ModalActionTypes) => {
  switch (action.type) {
    case SHOW_USER_MODAL:
      return { ...state, isModalShowing: true };
    case HIDE_USER_MODAL:
      return { ...state, isModalShowing: false };
    default:
      return state;
  }
};
