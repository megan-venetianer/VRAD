import React from 'react';
import Listings from './Listings.js';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom';

describe('Listings', () => {
  it('renders listing information to each card', () => {
    const { getByText } = render(
      <Router><Listings
        name={"mockname"}
        area_id={"5"}
        listing_id={"50"}
        /></Router>);

    const nameEl = getByText("mockname");
    expect(nameEl).toBeInTheDocument();
  });
});
