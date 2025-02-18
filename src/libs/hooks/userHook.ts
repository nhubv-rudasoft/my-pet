import {getUserProfile} from '../services/userService.ts';
import {useAppDispatch, useAppSelector} from './storeHook.ts';
import {setProfile} from '../slide/userSlice.ts';
import {useQueryBase} from './queryBaseHook.ts';


export const useProfile = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(AppRootState => AppRootState.user.profile);


  const query = useQueryBase(
    ['useProfile'],
    async () => {
      const data = await getUserProfile();
      dispatch(setProfile(data));
      return data;
    }
  );

  return {
    profile,
    isLoading: query.isPending,
    isError: query.isError,
    error: query.error,
  };
}