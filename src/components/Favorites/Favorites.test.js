import React from 'react';
import Favorites from './Favorites.js';
import { render, waitForElement, getByText, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom';

describe('Favorites', () => {
  let mockRender;
  const mockFaveFunc = jest.fn();
  beforeEach(() => {
    mockRender = render(
      <Router>
        <Favorites
          name={'mockName'}
          area_id={500}
          listing_id={2}
          remove={mockFaveFunc}
        />)
      </Router>
    )
  })
  afterEach(() => {
    cleanup()
  })
  it('render a listings', async () => {
    const { getByTestId, getByText } = mockRender;

    await waitForElement(() => getByTestId('favorites-card'))

    expect(getByTestId('favorites-card')).toBeInTheDocument();
    expect(getByText('mockName')).toBeInTheDocument();
    expect(getByText('Remove From Favorites')).toBeInTheDocument()
  })
  it('can remove itself as a favorite', () => {
    const { getByTestId, getByText } = mockRender;
    fireEvent.click(getByText('Remove From Favorites'))
    expect(mockFaveFunc).toHaveBeenCalledTimes(1)
  })
})