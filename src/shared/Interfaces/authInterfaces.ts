export interface IRegistrationData {
  email: string;
  password: string;
  name: string;
}

export interface IRegistrationResponse {
  id: number;
  roles: [
    {
      id: number;
      value: string;
      description: string;
      createdAt: string;
      updatedAt: string;
    }
  ];
  token: string;
  name: string;
  phoneNumber: null;
  updatedAt: string;
  createdAt: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IUserData {
  id: number;
  roles: [string];
  name: string;
  phoneNumber: null;
  updatedAt: string;
  createdAt: string;
}
