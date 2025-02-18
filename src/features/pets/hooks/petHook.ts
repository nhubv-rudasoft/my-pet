import {getMyPets} from '../services';
import {useQueryBase} from '../../../libs/hooks/queryBaseHook.ts';

export const useMyPets = () => {
  const query = useQueryBase(['myPets'], getMyPets);

  return {
    pets: query.data,
    isLoading: query.isPending,
    isError: query.isError,
    error: query.error,
  };
}
