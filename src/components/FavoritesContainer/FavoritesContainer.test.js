import React from 'react';
import FavoritesContainer from './FavoritesContainer.js';
import { render, waitForElement } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom';

describe('FavoritesContainer', () => {
  it('renders listings', async () => {
    const { getByTestId } = render(
      <Router>
      <FavoritesContainer
        faves={['fave1', 'fave2']}
        removeFromFavorites={() => {}}
        />);
        />
      </Router>);
      await waitForElement(() => getByTestId('favorites-container'))
      expect(getByTestId('favorites-container')).toBeInTheDocument();
  })
})