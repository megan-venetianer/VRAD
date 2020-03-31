import React from 'react';
import ListingCardContainer from './ListingCardContainer.js';
import { render, waitForElement } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';

describe('ListingCardContainer', () => {
  it('should render the current listing details', async () => {
    const { getByText, getByTestId, debug } = render(
      <Router>
      <ListingCardContainer
        currentListing={{
          name:"mockName",
          area:"mockArea",
          address:"mockAddress",
          details:{
            baths:3,
            beds:4,
            features:['feature1', 'feature2']
          }
        }}
        username='mockUser'
        tripType='mockTrip'
      /></Router>)

      const containerEl = await waitForElement(() => getByTestId('listingCardContainer'))
      expect(containerEl).toBeInTheDocument();
  })
})
