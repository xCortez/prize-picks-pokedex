import { render, screen, waitFor } from "@testing-library/react";
import TextInput from ".";
import userEvent from "@testing-library/user-event";

describe('<Text Input />', () => {
  const mockOnInputChange = jest.fn();

  describe('user input event', () => {
    it('updates and returns queryString on user input', async () => {
      render(<TextInput onInputChange={mockOnInputChange}/>);

      const input = screen.getByRole('textbox');
      await waitFor(() => userEvent.type(input, 'pikachu'));

      expect(input).toHaveValue('pikachu');
    });
  });

  describe('debounce', () => {
    it('expect mockOnInputChange to be called after debounce', async () => {
      render(<TextInput onInputChange={mockOnInputChange}/>);

      const input = screen.getByRole('textbox');
      await waitFor(() => userEvent.type(input, 'pikachu'));

      // await 1000ms before continuing further to allow the debounce to finish
      await new Promise(res => setTimeout(res, 1000));

      expect(mockOnInputChange).toHaveBeenCalledWith('pikachu');
    });
  });

  describe('children', () => {
    it('renders the children', async () => {
      render(<TextInput onInputChange={mockOnInputChange}>Children</TextInput>);

      expect(screen.getByText('Children')).toBeInTheDocument();
    });
  });
});