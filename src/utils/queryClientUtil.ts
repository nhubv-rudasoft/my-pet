import {
  UseQueryOptions,
  useQuery,
  UseMutationOptions,
  useMutation
} from '@tanstack/react-query';

interface QueryConfig<TData> extends Omit<UseQueryOptions<TData>, 'queryKey' | 'queryFn'> {
  requireAuth?: boolean;
}

export const createQuery = <TData>(
  queryKey: string[],
  queryFn: () => Promise<TData>,
  defaultConfig?: QueryConfig<TData>
) => {
  return (customConfig?: QueryConfig<TData>) => {
    return useQuery<TData>({
      queryKey,
      queryFn,
      ...defaultConfig,
      ...customConfig
    });
  };
};

export const createMutation = <TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  defaultConfig?: Omit<UseMutationOptions<TData, unknown, TVariables>, 'mutationFn'>
) => {
  return (customConfig?: UseMutationOptions<TData, unknown, TVariables>) => {
    return useMutation({
      mutationFn,
      ...defaultConfig,
      ...customConfig,
      onSuccess: (...args) => {
        // Default success behavior
        defaultConfig?.onSuccess?.(...args);
        customConfig?.onSuccess?.(...args);
      }
    });
  };
};