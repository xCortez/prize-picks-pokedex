import axios from "axios";

const buildFetchPath = (path: string ) => `https://pokeapi.co/api/v2/${path}`

export default function pokemonFetcher(path: string) {
  const fetchPath = buildFetchPath(path);

  return axios.get(fetchPath).then((response) => response.data)
}