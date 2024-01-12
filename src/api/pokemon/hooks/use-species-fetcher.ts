import useSWR from "swr";
import pokemonFetcher from "../pokemon-fetcher";
import { Pokemon, PokemonSpecies } from "../schema";

export default function useSpeciesFetcher({ queryStr }: { queryStr?: string }) {
  const stringifyAndLowercase = (val: string | number) => String(val).toLowerCase();
  const normalizedQueryStr = queryStr ? stringifyAndLowercase(queryStr) : undefined;
  const path = queryStr ? `pokemon-species/${normalizedQueryStr}` : '';

  const { error, ...swrProps } = useSWR<PokemonSpecies>(path, pokemonFetcher);

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