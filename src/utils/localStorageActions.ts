import { IPersonsModalType } from '@/store/reducers/filmPageReducer';

const setPersonsModal = (value: IPersonsModalType) => {
  if (value) localStorage.setItem('personModal', value);
};

const removePersonsModal = () => {
  return localStorage.removeItem('personModal');
};

const setIsOpenPersonModal = (value: string) => {
  if (value) localStorage.setItem('isOpenPersonModal', value);
};

export const localStorageActions = {
  setPersonsModal,
  removePersonsModal,
  setIsOpenPersonModal,
};
