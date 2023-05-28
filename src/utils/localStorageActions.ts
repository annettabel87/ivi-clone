import { ILoginData } from '@/shared/Interfaces/authInterfaces';

const setToken = (token: string) => {
  if (token) localStorage.setItem('token', token);
};

const getToken = () => {
  return localStorage.getItem('token');
};

const removeToken = () => {
  return localStorage.removeItem('token');
};

const setLoginData = (data: ILoginData) => {
  localStorage.setItem('loginData', JSON.stringify(data));
};

const getLoginData = () => {
  const data = localStorage.getItem('loginData');
  return data && JSON.parse(data);
};

const removeLoginData = () => {
  return localStorage.removeItem('loginData');
};

const setCurrentUser = (data: { [key: string]: string }) => {
  localStorage.setItem('currentUser', JSON.stringify({ ...data }));
};

const getCurrentUser = () => {
  const data = localStorage.getItem('currentUser');
  return data && JSON.parse(data);
};

const removeCurrentUser = () => {
  return localStorage.removeItem('currentUser');
};

export const localStorageActions = {
  setToken,
  getToken,
  removeToken,
  setLoginData,
  getLoginData,
  removeLoginData,
  setCurrentUser,
  getCurrentUser,
  removeCurrentUser,
};
