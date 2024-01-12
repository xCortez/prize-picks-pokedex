import TextInput from "../../inputs/text-input"
import { Pokedex } from "../../inputs/text-input/index.css"
import pokedexIcon from "../../../assets/pokedex-icon.png"
import { useState } from "react";
import usePokemonFetcher from "../../../api/pokemon/hooks/use-pokemon-fetcher";
import Loading from "../../feedback/loading";
import PokemonCard from "../../surfaces/card/pokemon-card";

export default function PokemonSearchForm() {
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = usePokemonFetcher({ queryStr: query });
  const missingPokemonError = error && error?.response.data === 'Not Found';

  return (
    <div>
      <span>
        <TextInput onInputChange={(val) => setQuery(val)}>
          <>
            <Pokedex src={pokedexIcon}/>
            Poke Search
          </>
        </TextInput>
      </span>

      { isLoading && <Loading visible={isLoading} /> }
      { !error && !isLoading && data && (
        <PokemonCard pokemonData={data} />
      )}

      {missingPokemonError && <>{query ? `"${query}"` : ''} Pokemon not found</>}
    </div>
  );
}