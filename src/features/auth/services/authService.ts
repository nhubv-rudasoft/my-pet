import {
  ForgotPasswordRequest,
  ForgotPasswordResponse,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPasswordRequest,
  ResetPasswordResponse
} from '../types';
import {Post} from '../../../app/config';
import {BaseSingle} from '../../../libs/types/baseSingleType.ts';
import {AuthConstants} from '../constants';

const AUTH_API_URI = AuthConstants.AUTH_API_URI;

export function register(payload: RegisterRequest) {
  return Post<BaseSingle<RegisterResponse>>(AUTH_API_URI.REGISTER, payload);
}

export function login(payload: LoginRequest) {
  return Post<BaseSingle<LoginResponse>>(AUTH_API_URI.LOGIN, payload);
}

export function forgotPassword(payload: ForgotPasswordRequest) {
  return Post<BaseSingle<ForgotPasswordResponse>>(AUTH_API_URI.FORGOT_PASSWORD, payload);
}

export function resetPassword(payload: ResetPasswordRequest) {
  return Post<BaseSingle<ResetPasswordResponse>>(AUTH_API_URI.CHANGE_PASSWORD, payload);
}