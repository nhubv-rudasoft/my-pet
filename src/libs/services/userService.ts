import {Get} from '../../app/config';
import {UserProfileResponse} from '../types/userType.ts';

export function getUserProfile() {
  return Get<UserProfileResponse>('/userProfile');
}