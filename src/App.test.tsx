import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  // screen.debug();
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('selected location should be empty on init', ()=> {
  render(<App/>);
  // search for selected location
  const selectedLocation = screen.queryByTestId('selected-location');

  // confirm that selected location div is not being rendered on first render
  expect(selectedLocation).toBeNull();
});
