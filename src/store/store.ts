import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import filmPageReducer from './reducers/filmPageReducer';
import authReducer from './reducers/authReducer';
import { createWrapper } from 'next-redux-wrapper';
import profileReducer from './reducers/profileReducer';

export const rootReducer = combineReducers({
  filmPageReducer,
  authReducer,
  profileReducer,
});

export const createReduxStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export const store = createReduxStore();
export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper<AppStore>(createReduxStore);

export default store;
