import { render, screen } from "@testing-library/react";
import PokemonCard from ".";
import { MemoryRouter } from "react-router-dom";

const mockPokemonData = {
  name: 'pikachu',
  id: 25,
  height: 4,
  weight: 60,
  base_experience: 112,
  abilities: [],
  types: [],
  game_indices: [],
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
  },
  stats: []
} as any;

describe('<Pokemon Card />', () => {
  it('renders the pokemon card with all the pokemon data', () => {
    render(
      <MemoryRouter>
        <PokemonCard
          pokemonData={mockPokemonData}
        />
      </MemoryRouter>
    );
    const identifierKeys = ['Id', 'Height', 'Weight', 'Base experience', 'Abilities', 'Types', 'Game versions present in'];

    identifierKeys.forEach((identifier) => {
      expect(screen.getByText(identifier)).toBeInTheDocument();
    })

    expect(screen.getByText(': pikachu')).toBeInTheDocument();
    expect(screen.getByText(': 25')).toBeInTheDocument();
    expect(screen.getByText(': 4')).toBeInTheDocument();
    expect(screen.getByText(': 60')).toBeInTheDocument();
    expect(screen.getByText(': 112')).toBeInTheDocument();
  });
});