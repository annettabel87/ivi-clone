import { IUserData } from '@/shared/Interfaces/authInterfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { destroyCookie } from 'nookies';

export interface IProfileSliceState {
  user: IUserData | null;
  errorUser?: string;
}

export const initialState: IProfileSliceState = {
  user: null,
};

export const profileSlice = createSlice({
  name: 'authorization',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload;
    },
    cancel: (state) => {
      destroyCookie(null, 'authToken', { path: '/' });
      state.user = null;
      state.errorUser = '';
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      state.user = action.payload.profileReducer.user;
    },
  },
});

export const { cancel, setUser } = profileSlice.actions;
export default profileSlice.reducer;
