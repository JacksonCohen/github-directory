import { UPDATE_SEARCH_CRITERIA } from '../actions/actionTypes';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  searchCriteria: 'followers'
};

export default (state = initialState, action: PayloadAction<string>) => {
  switch (action.type) {
    case UPDATE_SEARCH_CRITERIA:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};
