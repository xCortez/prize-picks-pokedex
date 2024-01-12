import { useParams, Link } from 'react-router-dom';
import usePokemonFetch from '../../api/pokemon/hooks/use-pokemon-fetcher';
import PokemonCard from '../../components/surfaces/card/pokemon-card';
import Loading from '../../components/feedback/loading';
import { PageWrapper, BackgroundImg, SpeciesData } from './index.css';
import useSpeciesFetcher from '../../api/pokemon/hooks/use-species-fetcher';
import titlizeString from '../../utils/titleize-string';

export default function Pokemon() {
  const { id = '' } = useParams();
  const { data, isLoading, error } = usePokemonFetch({ queryStr: id });
  const { data: speciesData } = useSpeciesFetcher({ queryStr: id });
  const speciesEvolvesFromUrlParts = speciesData && speciesData.evolves_from_species?.url.split('/') || [];

  return (
    <PageWrapper $url={data?.sprites.back_default}>
      <BackgroundImg $url={data?.sprites.back_default}/>
      { isLoading && <Loading visible={isLoading} /> }
      { !error && !isLoading && data && (
        <PokemonCard pokemonData={data} />
      )}
      {speciesData && (
        <>
          <h4>Species Data</h4>
          <SpeciesData>
            <span>Aliases: {speciesData.names.map(({ name }) => name).join(', ')}</span>
            <span>Habitat: {speciesData.habitat.name}</span>
            {speciesData.evolves_from_species && (
              <span>
                Evolves from:
                <Link to={`/pokemon/${speciesEvolvesFromUrlParts[speciesEvolvesFromUrlParts.length - 2]}`}>
                  {titlizeString(speciesData.evolves_from_species.name)}
                </Link>
              </span>
            )}
          </SpeciesData>
        </>
      )}
    </PageWrapper>
  )
};