import { render, screen } from '@testing-library/react';
import AppGaleria from './AppGaleria';

test('renders learn react link', () => {
  render(<AppGaleria />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
