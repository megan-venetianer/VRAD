import React from 'react';
import ListingContainer from './ListingContainer.js';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom';

describe('ListingContainer', () => {
  it('renders listings', () => {
    const { getByTestId } = render(
      <Router>
      <ListingContainer
        listId={5}
        tripType={'Vacation'}
        neighborhoods={[{}, {}, {}]}
        username={'mockUser'}
        />);
        />
      </Router>);
     setTimeout(() => {
      const containerEl = getByTestId("listing-container")
      expect(containerEl).toBeInTheDocument();
     }, 500)
  })
  it('fetches user data', () => {
    const fetch = jest.fn()
    fetch('http://localhost:3001/api/v1/areas/5')
    expect(fetch).toHaveBeenCalledTimes(1)
  })
  
})