import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type IPersonsModalType = 'persons' | 'reviews' | 'trailers';
export interface IFilmPageState {
  modalType: IPersonsModalType;
  isOpen: boolean;
}
export const initialState: IFilmPageState = {
  modalType: 'persons',
  isOpen: false,
};

export const filmPageSlice = createSlice({
  name: 'filmPage',
  initialState,
  reducers: {
    SET_MODAL_TYPE(state, action: PayloadAction<IPersonsModalType>) {
      state.modalType = action.payload;
      localStorage.setItem('personModal', action.payload);
    },
    SET_OPEN(state, action: PayloadAction<boolean>) {
      state.isOpen = action.payload;
      localStorage.setItem('isOpenPersonModal', JSON.stringify(state.isOpen));
    },
  },
});

export const { SET_MODAL_TYPE, SET_OPEN } = filmPageSlice.actions;

export default filmPageSlice.reducer;
