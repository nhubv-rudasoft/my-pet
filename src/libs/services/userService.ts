import {Get} from '../../app/configs';
import {UserProfile} from '../types';

export function getUserProfile() {
  return Get<UserProfile>('/userProfile');
}