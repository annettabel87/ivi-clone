import { IUserData } from '@/shared/Interfaces/authInterfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import nookies from 'nookies';

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
      state.user = null;
      state.errorUser = '';
      const cookies = nookies.get();
      for (const cookie of Object.keys(cookies)) {
        nookies.destroy(null, cookie);
      }
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log(action);
      state.user = action.payload.profileReducer.user;
    },
  },
});

export const { cancel, setUser } = profileSlice.actions;
export default profileSlice.reducer;
