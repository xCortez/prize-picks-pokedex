import useSWR from "swr";
import pokemonFetcher from "../pokemon-fetcher";
import { Pokemon } from "../schema";
import { useEffect } from "react";
import { HistoryEntry } from "../../../redux/history/history-slice/schema";
import { useDispatch } from 'react-redux';
import { addSearch } from '../../../redux/history/history-slice';

interface UsePokemonFetcher { queryStr?: string | number }

export default function usePokemonFetcher({ queryStr }: UsePokemonFetcher) {
  const dispatch = useDispatch();

  // data normlization
  const stringifyAndLowercase = (val: string | number) => String(val).toLowerCase();
  const normalizedQueryStr = queryStr ? stringifyAndLowercase(queryStr) : undefined;
  const path = queryStr ? `pokemon/${normalizedQueryStr}` : undefined;

  const { error, data, ...swrProps } = useSWR<Pokemon>(path, pokemonFetcher);

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

  // update history upon search data changing
  useEffect(function _updateHistory() {
    if (!data || error) return;

    const historyEntry: HistoryEntry = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      dateSearched: Date.now(),
    };

    dispatch(addSearch(historyEntry));
  }, [data, dispatch, error]);

  return { ...swrProps, data, error: sanitizedError };
}