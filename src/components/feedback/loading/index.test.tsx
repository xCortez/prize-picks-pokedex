import { render, screen } from "@testing-library/react";
import Loading from ".";

describe('<Loading />', () => {
  it('renders the loading component', () => {
    render(<Loading visible/>)
    expect(screen.getByLabelText('Loading Spinner')).toBeInTheDocument();
  });
});