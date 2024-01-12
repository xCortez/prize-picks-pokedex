import { render, screen } from "@testing-library/react";
import Card from ".";

describe('<Card />', () => {
  it('renders the children within the card', () => {
    render(<Card>Children</Card>)

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});