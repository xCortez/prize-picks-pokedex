import useSWR from "swr";
import pokemonFetcher from "../pokemon-fetcher";
import { Pokemon } from "../schema";
import { useEffect } from "react";
import { HistoryEntry } from "../../../redux/history/history-slice/schema";
import { useDispatch, useSelector } from 'react-redux';
import { addSearch, clearHistory } from '../../../redux/history/history-slice';

interface UsePokemonFetch { queryStr?: string | number }

export default function usePokemonFetch({ queryStr }: UsePokemonFetch) {
  const dispatch = useDispatch();
  const stringifyAndLowercase = (val: string | number) => String(val).toLowerCase();

  const normalizedQueryStr = queryStr ? stringifyAndLowercase(queryStr) : undefined;

  const { error, data, ...swrProps } = useSWR<Pokemon>(normalizedQueryStr, pokemonFetcher);

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

  useEffect(function _updateHistory() {
    if (!data || error) return;

    const historyEntry: HistoryEntry = {
      id: data.id,
      name: data.name,
      sprite: data.sprites.front_default,
      dateSearched: Date.now(),
    };

    dispatch(addSearch(historyEntry));
  }, [data]);

  return { ...swrProps, data, error: sanitizedError };
}