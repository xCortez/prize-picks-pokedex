import { render, screen } from "@testing-library/react";
import PokemonSearchForm from ".";
import usePokemonFetcher from "../../../api/pokemon/hooks/use-pokemon-fetcher";
import { Pokemon } from "../../../api/pokemon/schema";

jest.mock('../../../api/pokemon/hooks/use-pokemon-fetcher')
const mockusePokemonFetcher = usePokemonFetcher as jest.MockedFunction<typeof usePokemonFetcher>;

jest.mock('../../feedback/loading', () => () => <>Loading</>)

jest.mock('../../surfaces/card/pokemon-card', () => ({ pokemonData }: { pokemonData: Pokemon }) => {
  return <>{pokemonData.name}</>
});

const mockPokemonData = {
  name: 'pikachu',
  sprites: {},
  types: [],
  abilities: [],
  game_indices: [],
  stats: []
};

describe('<PokemonSearchForm />', () => {
  beforeEach(() => {
    mockusePokemonFetcher.mockReturnValue({
      data: undefined,
      isLoading: false,
      error: undefined
    } as any);
  });

  describe('initial render', () => {
    it('renders the text input & search label', () => {
      render(<PokemonSearchForm />);

      // this quantifies into a non-query
      expect(mockusePokemonFetcher).toHaveBeenCalledWith({ queryStr: '' });
      expect(mockusePokemonFetcher).toHaveBeenCalledTimes(1);
      expect(screen.getByText('Poke Search')).toBeInTheDocument();
      expect(screen.queryByText('Loading')).not.toBeInTheDocument();
    });
  });

  describe('successful search', () => {
    it('renders the pokemon card', () => {
      mockusePokemonFetcher.mockReturnValue({
        data: mockPokemonData,
        isLoading: false,
        error: undefined
      } as any);

      render(<PokemonSearchForm />);

      expect(screen.getByText('pikachu')).toBeInTheDocument();
    });
  });

  describe('loading state', () => {
    it('displays the loading spinner', () => {
      mockusePokemonFetcher.mockReturnValue({
        data: undefined,
        isLoading: true,
        error: undefined
      } as any);

      render(<PokemonSearchForm />);

      expect(screen.getByText('Loading')).toBeInTheDocument();
    });
  });

  describe('error state / no matches found', () => {
    it('displays the error message', () => {
      mockusePokemonFetcher.mockReturnValue({
        data: undefined,
        isLoading: false,
        error: { response: { data: 'Not Found' } }
      } as any);

      render(<PokemonSearchForm />);

      expect(screen.getByText('Pokemon not found')).toBeInTheDocument();
    });
  });
});