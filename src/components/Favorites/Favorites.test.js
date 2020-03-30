import React from 'react';
import Favorites from './Favorites.js';
import { render, waitForElement } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom';

describe('Favorites', () => {
  it('renders listings', async () => {
    const { getByTestId } = render(
      <Router>
      <Favorites
        name={'Josh Johnson'}
        area_id={500}
        listing_id={2}
        remove={() => {}}
        />);
        />
      </Router>);
      await waitForElement(() => getByTestId('favorites-card'))
      expect(getByTestId('favorites-card')).toBeInTheDocument();
  })
})