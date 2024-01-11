import useSWR from "swr";
import pokemonFetcher from "../pokemon-fetcher";

interface UsePokemonFetch { queryStr?: string }

export default function usePokemonFetch({ queryStr }: UsePokemonFetch) {
  return useSWR(queryStr, pokemonFetcher)
}