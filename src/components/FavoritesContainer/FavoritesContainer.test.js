import React from 'react';
import FavoritesContainer from './FavoritesContainer.js';
import { render, waitForElement, getByTestId, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom';

describe('FavoritesContainer', () => {
  let mockRender;
  const mockViewFunction = jest.fn()
  beforeEach(() => {
    mockRender = render (
      <Router>
        <FavoritesContainer
          faves={['fave1', 'fave2']}
          removeFromFavorites={mockViewFunction}
        />);
      />
      </Router>
    )
  })
  afterEach(() => {
    cleanup()
  })
  it('renders listings', () => {
      const { getByTestId } = mockRender;
      getByTestId('favorites-container')
      expect(getByTestId('favorites-container')).toBeInTheDocument();
  })
})