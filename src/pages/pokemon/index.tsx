import { useParams } from 'react-router-dom';
import usePokemonFetch from '../../api/pokemon/hooks/use-pokemon-fetcher';
import PokemonCard from '../../components/surfaces/card/pokemon-card';
import Loading from '../../components/feedback/loading';

export default function Pokemon() {
  const { id } = useParams();
  const { data, isLoading, error } = usePokemonFetch({ queryStr: id });

  return (
    <>
      { isLoading && <Loading visible={isLoading} /> }
      { !error && !isLoading && data && (
        <PokemonCard pokemonData={data} />
      )}
    </>
  )
};