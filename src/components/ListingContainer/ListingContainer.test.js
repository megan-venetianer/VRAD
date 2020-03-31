import React from 'react';
import ListingContainer from './ListingContainer.js';
import { render, waitForElement } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom';

describe('ListingContainer', () => {
  it('renders listings', async () => {
    const { getByTestId, getByText } = render(
      <Router>
      <ListingContainer
        listings = {[]}
        username = {'William'}
        tripType = {'Vacation From Hell'}
        selectedNeighborhood = {'Skid Row'}
        />);
        />
      </Router>);
      await waitForElement(() => (getByTestId('listing-container'))
      )
      expect(getByTestId('listing-container')).toBeInTheDocument();
  })
})