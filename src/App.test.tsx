import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name as heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rishee Jayasimha/i);
  expect(linkElement).toBeInTheDocument();
});
