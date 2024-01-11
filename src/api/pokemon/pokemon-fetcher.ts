import axios from "axios";

const buildFetchPath = (characterName: string ) => `https://pokeapi.co/api/v2/pokemon/${characterName}`

export default function pokemonFetcher(characterName: string) {
  const fetchPath = buildFetchPath(characterName);

  return axios.get(fetchPath).then((response) => response.data)
}