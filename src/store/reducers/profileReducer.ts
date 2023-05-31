import { userApi } from '@/api/api';
import { IUserData } from '@/shared/Interfaces/authInterfaces';
import errorMessage from '@/shared/errorMessage/errorMessage';
import { PayloadAction, createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { HYDRATE } from 'next-redux-wrapper';

export const getUser = createAsyncThunk<IUserData>(
  'profile/getUser',
  async (_, { rejectWithValue }) => {
    try {
      return await userApi.getUser();
    } catch (error) {
      return rejectWithValue(errorMessage(error as AxiosError));
    }
  }
);

export interface IProfileSliceState {
  meRequestStatus: 'idle' | 'pending' | 'succeeded' | 'failed';
  user?: IUserData;
  errorUser?: string;
}

export const initialState: IProfileSliceState = {
  meRequestStatus: 'idle',
};
const hydrate = createAction<IProfileSliceState>(HYDRATE);

export const profileSlice = createSlice({
  name: 'authorization',
  initialState: initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload;
    },
    cancel: (state) => {
      state.user = undefined;
      state.errorUser = '';
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      console.log('HYDRATE user', action.payload);
      if (!action.payload.user) {
        return state;
      }
      console.log(action.payload);
      state.user = action.payload.user;
    });
    builder.addCase(getUser.pending, (state) => {
      state.errorUser = '';
      state.meRequestStatus = 'pending';
    });
    builder.addCase(getUser.fulfilled, (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload;
      state.errorUser = undefined;
      state.meRequestStatus = 'succeeded';
    });
    builder.addCase(getUser.rejected, (state) => {
      state.errorUser = 'Ошибка! Попробуйте снова!';
    });
  },
});

export const { cancel, setUser } = profileSlice.actions;
export default profileSlice.reducer;
