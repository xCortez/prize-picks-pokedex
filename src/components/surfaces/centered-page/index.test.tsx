import { render, screen } from "@testing-library/react";
import CenteredPage from ".";

describe('<CenteredPage />', () => {
  it('renders the children within the card', () => {
    render(<CenteredPage>Children</CenteredPage>)

    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});