import { localStorageActions } from '@/utils/localStorageActions';

export const authUser = () => {
  const token = localStorageActions.getToken();
  if (token) {
    return 'Bearer ' + token;
  } else {
    return '';
  }
};
