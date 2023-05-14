import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filmPageReducer from './reducers/filmPageReducer';

export const rootReducer = combineReducers({
  filmPageReducer,
});

export const createReduxStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};
export const store = createReduxStore();
export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
