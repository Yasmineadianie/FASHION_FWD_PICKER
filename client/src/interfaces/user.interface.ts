export interface User {
  user_id: number;
  email: string;
  name: string;
  password: string;
  lastname: string;
  phone_number?: string;
  avatar?: string;
  is_confirmed: boolean;
  user_is_deleted: boolean;
  type: 1 | 2;
}

export interface RegisterForm {
  email: string;
  name: string;
  password: string;
  lastname: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

