import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface IMobileNavigationState {
  section: 'Мой Иви' | 'Каталог' | 'Поиск' | 'TV+' | 'Еще' | 'Закрыть';
  isOpen: boolean;
}

export const initialState: IMobileNavigationState = {
  section: 'Мой Иви',
  isOpen: false,
};

export const mobileNavigationSlice = createSlice({
  name: 'mobileNavigation',
  initialState,
  reducers: {
    SET_SECTION(
      state,
      action: PayloadAction<'Мой Иви' | 'Каталог' | 'Поиск' | 'TV+' | 'Еще' | 'Закрыть'>
    ) {
      state.section = action.payload;
    },
    SET_MOBILE_MENU_OPEN(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
    },
  },
});

export const { SET_SECTION } = mobileNavigationSlice.actions;
export default mobileNavigationSlice.reducer;
