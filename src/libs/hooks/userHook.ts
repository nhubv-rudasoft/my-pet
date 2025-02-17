import {getUserProfile} from '../services/userService.ts';
import {createQuery} from '../../utils/queryClientUtil.ts';

export const useGetUserProfile = createQuery(['userProfile'], getUserProfile);