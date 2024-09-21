export type LoginRequest = {
  phone_number: string;
  password: string;
};

export type RegisterRequest = {
  name: string;
  password: string;
  address: string;
  phone_number: string;
};

export type CurrentLoggedInRequest = {
  phone_number: string;
};

export type CurrentLoggedInResponse = {
  id_user: string;
  name: string;
  address: string;
  phone_number: string;
};