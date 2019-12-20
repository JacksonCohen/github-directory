import { UPDATE_SEARCH_CRITERIA } from '../actions/actionTypes';
import { Search, SearchCriteriaActionTypes } from '../interfaces/Search.interface';

const initialState: Search = {
  criteria: 'followers'
};

export default (state = initialState, action: SearchCriteriaActionTypes) => {
  switch (action.type) {
    case UPDATE_SEARCH_CRITERIA:
      return { ...state, searchQuery: action.criteria };
    default:
      return state;
  }
};
