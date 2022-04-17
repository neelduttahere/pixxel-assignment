import React from 'react';
import { render, screen } from '@testing-library/react';
import LocationSearch from './locationSearch';

test('render search bar', () => {
  render(<LocationSearch/>);
})