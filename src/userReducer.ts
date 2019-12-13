import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentUser {
  username: string;
}

type InitialState = {} & CurrentUser

let initialState: InitialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'issuesDisplay',
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<CurrentUser>) {
      const { username } = action.payload;
      state.username = username;
    },
  }
});

export const {
  setUserName,
} = userSlice.actions;

export default userSlice.reducer;
