export type ModalType = 'login' | 'register' | null;

export interface LoginForm {
  identifier: string;
  password: string;
}

export interface RegisterForm {
  firmName: string;
  customerName: string;
  mobile: string;
  email: string;
}
