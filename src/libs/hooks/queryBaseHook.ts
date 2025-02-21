import {QueryKey, useQuery} from '@tanstack/react-query';
import {QueryConfig} from '../types';
import {AxiosError} from 'axios';

export const useQueryBase = <TData>(
  queryKey: QueryKey,
  queryFn: () => Promise<TData>,
  config?: QueryConfig<TData, AxiosError>
) => {
  return useQuery({
    queryKey,
    queryFn,
    ...config
  });
};