import React from 'react';
import NeighborhoodContainer from './NeighborhoodContainer.js';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom';

describe('NeighborhoodContainer', () => {
  it('should render neighborhood cards', () => {
    const { getByText, getByTestId } = render(
      <Router><NeighborhoodContainer
        neighborhoods={[]}
        username='meg'
        tripType='vacation'
      /></Router>)

      const containerEl = getByTestId("neighborhoodContainer");
      const headerEl = getByTestId("neighborhoodHeader")
      expect(containerEl).toBeInTheDocument();
      expect(headerEl).toBeInTheDocument();
  });
});
