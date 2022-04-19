import React from 'react';
import { render, screen } from '@testing-library/react';
import LocationSearch from './locationSearch';
import userEvent from '@testing-library/user-event';

test('render search bar', () => {
  render(<LocationSearch/>);
});

test('search suggestions should be empty on init', ()=>{
  render(<LocationSearch/>);
  const searchSuggestions = screen.queryByTestId('search-suggestions');
  expect(searchSuggestions).toBeNull();
});

test('search suggestions to only show on search', ()=>{
  render(<LocationSearch/>);

  const searchBox:any = screen.queryByTestId('search-box');
  userEvent.type(searchBox, 'Kolkata');
  expect(searchBox).toHaveValue('Kolkata');
  const searchSuggest = screen.queryByTestId('search-suggestions');
  expect(searchSuggest).toBeDefined;
  

});
