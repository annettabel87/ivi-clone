import { loginApi, userApi } from '@/api/api';
import nookies, { parseCookies, setCookie } from 'nookies';
import {
  ILoginData,
  ILoginGoogleResponseData,
  ILoginResponseData,
  ILoginVKResponseData,
  IRegistrationData,
  IUserData,
} from '@/shared/Interfaces/authInterfaces';
import errorMessage from '@/shared/errorMessage/errorMessage';
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
      setCookie(null, 'authToken', token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      return response;
    } catch (error) {
      return rejectWithValue(errorMessage(error as AxiosError));
    }
  }
);
export interface ICode {
  code: string;
}
export const loginUserVK = createAsyncThunk<ILoginVKResponseData, string>(
  'authorization/loginVk',
  async (code, { rejectWithValue }) => {
    try {
      const response = await loginApi.vkLogin({ code });
      const { token } = response as ILoginVKResponseData;
      setCookie(null, 'authToken', token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      return response;
    } catch (error) {
      return rejectWithValue(errorMessage(error as AxiosError));
    }
  }
);

export const loginUserGoogle = createAsyncThunk<ILoginGoogleResponseData, string>(
  'authorization/loginGoogle',
  async (code, { rejectWithValue }) => {
    try {
      const response = await loginApi.googleLogin({ code });
      const { token } = response as ILoginGoogleResponseData;
      setCookie(null, 'authToken', token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
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
    builder.addCase(loginUserVK.pending, (state) => {
      state.loginRequestStatus = 'pending';
    });
    builder.addCase(loginUserVK.fulfilled, (state, action) => {
      state.loginRequestStatus = 'succeeded';
      state.token = action.payload.token;
      state.errorLogin = undefined;
      state.errorRegistration = undefined;
    });
    builder.addCase(loginUserVK.rejected, (state, action) => {
      state.loginRequestStatus = 'failed';
      if (action.payload) {
        state.errorLogin = (action.payload as string) || 'Ошибка входа! Попробуйте снова!';
      }
      state.errorRegistration = undefined;
    });
    builder.addCase(loginUserGoogle.pending, (state) => {
      state.loginRequestStatus = 'pending';
    });
    builder.addCase(loginUserGoogle.fulfilled, (state, action) => {
      state.loginRequestStatus = 'succeeded';
      state.token = action.payload.token;
      state.errorLogin = undefined;
      state.errorRegistration = undefined;
    });
    builder.addCase(loginUserGoogle.rejected, (state, action) => {
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
      if (action.payload) {
        state.errorRegistration =
          (action.payload as string) || 'Ошибка регистрации! Попробуйте снова!';
      }
    });
  },
});

export const { logout, setToken, cancel, setUser } = authorizationSlice.actions;
export default authorizationSlice.reducer;
