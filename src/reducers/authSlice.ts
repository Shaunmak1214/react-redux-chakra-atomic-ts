import cookie from 'js-cookie';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authInitialState as authTypes } from '../types/authTypes';

const initialState = {
  user: cookie.get('user') !== undefined ? JSON.parse(cookie.get('user')!) : {},
  isAuthenticated: cookie.get('accessToken') ? true : false,
  accessToken: cookie.get('accessToken') ? cookie.get('accessToken') : '',
  refreshToken: cookie.get('refreshToken') ? cookie.get('refreshToken') : '',
} as authTypes;

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      cookie.set('user', JSON.stringify(action.payload.user));
      cookie.set('isAuthenticated', JSON.stringify(true));
      cookie.set('accessToken', action.payload.accessToken);
      cookie.set('refreshToken', action.payload.refreshToken);
    },

    LOGOUT: (state) => {
      state.user = null;
      state.accessToken = '';
      state.refreshToken = '';
      state.isAuthenticated = false;
      cookie.set('user', JSON.stringify(null));
      cookie.set('isAuthenticated', JSON.stringify(false));
      cookie.set('accessToken', '');
      cookie.set('refreshToken', '');
    },
    UPDATE: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      cookie.set('user', JSON.stringify(action.payload));
    },
  },
});

export const { LOGIN, LOGOUT, UPDATE } = authSlice.actions;
export const selectIsAuthenticated = (state: any) => state.isAuthenticated;
export const selectUser = (state: any) => state.user;
export default authSlice.reducer;
