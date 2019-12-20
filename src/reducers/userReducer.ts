import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import UserProfile from '../interfaces/User.interface';

type InitialState = {} & UserProfile;

let initialState: InitialState = {
  username: '',
  avatar: '',
  bio: ''
};

const userSlice = createSlice({
  name: 'issuesDisplay',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<UserProfile>) {
      const { username } = action.payload;
      state.username = username;
    }
  }
});

export const { setUserName } = userSlice.actions;

export default userSlice.reducer;
