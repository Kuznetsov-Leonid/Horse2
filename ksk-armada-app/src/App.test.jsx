import { render, screen } from '@testing-library/react';
import App from './App';

test('renders general app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Конно-спортивный клуб/i);
  expect(linkElement).toBeInTheDocument();
});

