import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {UserProfile, UserState} from '../types/userType.ts';

const initialState: UserState = {
  profile: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
  }
});

export const { setProfile } = userSlice.actions;
export default userSlice.reducer;