import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../libs/slide/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer
  }
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;