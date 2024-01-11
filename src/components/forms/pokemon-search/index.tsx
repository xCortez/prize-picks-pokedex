import Button from "../../inputs/button"
import TextInput from "../../inputs/text-input"
import { Pokedex } from "../../inputs/text-input/index.css"
import pokedexIcon from "../../../assets/pokedex-icon.png"
import { useState } from "react";
import usePokemonFetch from "../../../api/pokemon/hooks/use-pokemon-fetcher";
import Loading from "../../feedback/loading";

export default function PokemonSearchForm() {
  const [query, setQuery] = useState('');
  const { data, isLoading, error } = usePokemonFetch({ queryStr: query });

  return (
    <div>
      <TextInput onInputChange={(val) => setQuery(val)}>
        <>
          <Button>
            <Pokedex src={pokedexIcon}/>
            Search
          </Button>
          <Loading visible={isLoading} />
        </>
      </TextInput>
    </div>
  );
}