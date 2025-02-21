import {
  ForgotPasswordRequest,
  LoginRequest,
  RegisterRequest,
  ResetPasswordRequest,
} from '../types';
import {login, register, forgotPassword, resetPassword} from '../services';
import {createMutation} from '../../../utils';

export const useRegister = createMutation(
  (data: RegisterRequest) => register(data),
);

export const useLogin = createMutation(
  (data: LoginRequest) => login(data),
);

export const useForgotPassword = createMutation(
  (data: ForgotPasswordRequest) => forgotPassword(data),
);

export const useResetPassword = createMutation(
  (data: ResetPasswordRequest) => resetPassword(data),
);
