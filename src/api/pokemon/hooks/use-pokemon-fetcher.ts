import useSWR from "swr";
import pokemonFetcher from "../pokemon-fetcher";

interface UsePokemonFetch { queryStr?: string | number }

export default function usePokemonFetch({ queryStr }: UsePokemonFetch) {
  const stringifyAndLowercase = (val: string | number) => String(val).toLowerCase();

  const normalizedQueryStr = queryStr ? stringifyAndLowercase(queryStr) : undefined;

  const { error, ...swrProps } = useSWR(normalizedQueryStr, pokemonFetcher);

  const sanitizedError = error ? {
    message: error?.message,
    response: {
      data: error?.response.data,
      status: error?.response.status,
      statusText: error?.response.statusText,
    },
    name: error?.name,
    code: error?.code,
  } : error;


  return { ...swrProps, error: sanitizedError };
}