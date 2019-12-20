import { SHOW_USER_MODAL, HIDE_USER_MODAL } from '../actions/actionTypes';
import { PayloadAction } from '@reduxjs/toolkit';
import Modal from '../interfaces/Modal.interface';

const initialState = {
  isModalShowing: false
};

export default (state: object = initialState, action: PayloadAction<Modal>) => {
  switch (action.type) {
    case SHOW_USER_MODAL:
      return { ...state, isModalShowing: true };
    case HIDE_USER_MODAL:
      return { ...state, isModalShowing: false };
    default:
      return state;
  }
};
