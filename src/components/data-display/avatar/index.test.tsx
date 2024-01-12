import { render, screen } from "@testing-library/react";
import Avatar from ".";

describe('<Avatar />', () => {
  it('renders the avatar with the image', () => {
    render(<Avatar imageSrc="test.com" />)
    const avatarImage = screen.getByRole('img');

    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', 'test.com');
  });
});