import {Get} from '../../app/configs';
import {UserProfile} from '../types/userType.ts';

export function getUserProfile() {
  return Get<UserProfile>('/userProfile');
}