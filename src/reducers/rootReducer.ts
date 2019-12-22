import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './userReducer';
import searchReducer from './searchReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  searchCriteria: searchReducer,
  modal: modalReducer
});

export default rootReducer;
