import {AxiosError} from 'axios';
import {MutationConfig} from '../types';
import {QueryKey, useMutation, useQueryClient} from '@tanstack/react-query';

export const useMutationBase = <TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  config?: MutationConfig<TData, AxiosError, TVariables> & {
    invalidateQueries?: QueryKey[];
  }
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn,
    onSuccess: (...args) => {
      if (config?.invalidateQueries) {
        config.invalidateQueries.forEach(queryKey => {
          queryClient.invalidateQueries({queryKey}).then();
        });
      }
      config?.onSuccess?.(...args);
    },
    ...config
  });
};