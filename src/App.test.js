import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


test('initial dataType state is provinces', () => {
  render(<App />);
  expect(screen.getByText('Provinces')).toBeInTheDocument();
});

test('changes dataType to territories on menu item click', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Territories'));
});


