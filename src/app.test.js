import { render, screen } from '@testing-library/react';
import App from '.app';

test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
