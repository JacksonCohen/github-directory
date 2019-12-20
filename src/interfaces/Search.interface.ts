import { UPDATE_SEARCH_CRITERIA } from '../actions/actionTypes';

export interface Search {
  criteria: string;
}

export interface UpdateSearchCriteriaAction {
  type: typeof UPDATE_SEARCH_CRITERIA;
  criteria: string;
}
