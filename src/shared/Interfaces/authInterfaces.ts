export interface IRegistrationData {
  email: string;
  password: string;
  name: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUserData {
  id: number;
  email: string;
  banned: boolean;
  roles: string[];
  name: string;
  phoneNumber: null;
  updatedAt: string;
  createdAt: string;
}

export interface ILoginResponseData {
  id: number;
  email: string;
  banned: boolean;
  roles: string[];
  token: string;
  name: string;
  phoneNumber: null;
  updatedAt: string;
  createdAt: string;
}

export interface ILoginVKResponseData {
  id: number;
  banned: boolean;
  email: string;
  roles: [];
  token: string;
}

export interface ILoginGoogleResponseData {
  id: number;
  banned: boolean;
  email: string;
  roles: Roles[];
  token: string;
  name: string;
}

export type Roles = 'USER' | 'ADMIN';
