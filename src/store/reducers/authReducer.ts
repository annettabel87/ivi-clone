import { loginApi, userApi } from '@/api/api';
import {
  ILoginData,
  ILoginResponseData,
  IRegistrationData,
  IUserData,
} from '@/shared/Interfaces/authInterfaces';
import errorMessage from '@/shared/errorMessage/errorMessage';
import { localStorageActions } from '@/utils/localStorageActions';
import { PayloadAction, createAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { HYDRATE } from 'next-redux-wrapper';

export const registrationUser = createAsyncThunk<ILoginResponseData, IRegistrationData>(
  'authorization/registration',
  async (registration, { rejectWithValue }) => {
    try {
      const response = await userApi.registerUser(registration);
      if (response) {
        return response;
      }
    } catch (error) {
      return rejectWithValue(errorMessage(error as AxiosError));
    }
  }
);

export const loginUser = createAsyncThunk<ILoginResponseData, ILoginData>(
  'authorization/login',
  async (login, { rejectWithValue }) => {
    try {
      const response = await loginApi.createToken(login);
      const { token } = response as ILoginResponseData;
      localStorageActions.setToken(token);
      return response;
    } catch (error) {
      return rejectWithValue(errorMessage(error as AxiosError));
    }
  }
);

export interface IAuthorizationSliceState {
  loginRequestStatus: 'idle' | 'pending' | 'succeeded' | 'failed';
  registrationRequestStatus: 'idle' | 'pending' | 'succeeded' | 'failed';
  token?: string;
  user?: IUserData;
  errorLogin?: string;
  errorRegistration?: string;
}

export const initialState: IAuthorizationSliceState = {
  loginRequestStatus: 'idle',
  registrationRequestStatus: 'idle',
};
const hydrate = createAction<IAuthorizationSliceState>(HYDRATE);

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState: initialState,
  reducers: {
    setToken: (state, action: PayloadAction<ILoginResponseData>) => {
      state.token = action.payload.token;
    },
    setUser: (state, action: PayloadAction<IUserData>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.loginRequestStatus = 'idle';
      state.registrationRequestStatus = 'idle';
      state.user = undefined;
      state.token = undefined;
    },
    cancel: (state) => {
      state.errorLogin = '';
      state.errorRegistration = '';
      state.user = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      console.log('HYDRATE user', action.payload);
      if (!action.payload.user) {
        return state;
      }
      state.user = action.payload.user;
    });

    builder.addCase(loginUser.pending, (state) => {
      state.loginRequestStatus = 'pending';
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loginRequestStatus = 'succeeded';
      state.token = action.payload.token;
      state.user = action.payload;
      state.errorLogin = undefined;
      state.errorRegistration = undefined;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginRequestStatus = 'failed';
      if (action.payload) {
        state.errorLogin = (action.payload as string) || 'Ошибка входа! Попробуйте снова!';
      }
      state.errorRegistration = undefined;
    });
    builder.addCase(registrationUser.pending, (state) => {
      state.registrationRequestStatus = 'pending';
    });
    builder.addCase(registrationUser.fulfilled, (state, action) => {
      state.registrationRequestStatus = 'succeeded';
      state.user = action.payload;
      state.errorLogin = undefined;
      state.errorRegistration = undefined;
    });
    builder.addCase(registrationUser.rejected, (state, action) => {
      state.registrationRequestStatus = 'failed';
      state.errorLogin = undefined;
      console.log(action.payload);
      if (action.payload) {
        state.errorRegistration =
          (action.payload as string) || 'Ошибка регистрации! Попробуйте снова!';
      }
    });
  },
});

export const { logout, setToken, cancel, setUser } = authorizationSlice.actions;
export default authorizationSlice.reducer;
