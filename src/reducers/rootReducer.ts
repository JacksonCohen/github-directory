import { combineReducers } from '@reduxjs/toolkit';

import userReducer from './userReducer';
import searchReducer from './searchReducer';
import viewReducer from './viewReducer';

const rootReducer = combineReducers({
  user: userReducer,
  searchCriteria: searchReducer,
  modal: viewReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
