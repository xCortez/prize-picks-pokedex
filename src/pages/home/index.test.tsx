import { render, screen } from "@testing-library/react";
import Home from ".";

jest.mock('../../components/forms/pokemon-search', () => () => <>PokemonSearchForm</>)

describe('<Home />', () => {
  it ('renders the PokemonSearchForm', () => {
    render(<Home />);

    expect(screen.getByText('PokemonSearchForm')).toBeInTheDocument();
  });
});