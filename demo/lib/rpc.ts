import { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';

const callFn = (method: any, ...params: any[]) => method(...params);
export const useRPC = <T extends (...args: any) => any>(
  a: undefined | false | '' | [T, ...Parameters<T>]
) =>
  useSWR<Awaited<ReturnType<T>>>(a, callFn, {
    shouldRetryOnError: false,
  });

export const useLazyRPC = <T extends (...args: any) => any>(
  a: undefined | false | '' | [T, ...Parameters<T>]
) => {
  const [isStarted, setIsStarted] = useState(false);
  const { mutate, ...rest } = useSWR<Awaited<ReturnType<T>>>(
    isStarted ? a : false,
    callFn,
    {
      shouldRetryOnError: false,
    }
  );

  const betterMutate: typeof mutate = (...args) => {
    setIsStarted(true);
    return mutate(...args);
  };

  return {
    mutate: betterMutate,
    ...rest,
  };
};

export const useRPCMutate = <T extends (...args: any) => any>(
  key: string,
  f: T
) => {
  const { mutate } = useSWRConfig();
  const [mutateResult, setMutateResult] = useState<ReturnType<T> | undefined>();
  const [error, setError] = useState<Error | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  return {
    mutate: async (...args: Parameters<T>) => {
      return mutate(key, async () => {
        setLoading(true);
        setMutateResult(undefined);
        setError(undefined);
        try {
          const result = await f(...args);
          setMutateResult(result);
          return result;
        } catch (error) {
          console.error(error);
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      });
    },
    data: mutateResult,
    error,
    loading,
  };
};
