const setToken = (token: string) => {
  if (token) localStorage.setItem('token', token);
};

const getToken = () => {
  return localStorage.getItem('token');
};

const removeToken = () => {
  return localStorage.removeItem('token');
};

export const localStorageActions = {
  setToken,
  getToken,
  removeToken,
};
