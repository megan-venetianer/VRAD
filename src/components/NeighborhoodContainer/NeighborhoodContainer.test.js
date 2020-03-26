import React from 'react';
import NeighborhoodContainer from './NeighborhoodContainer.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('NeighborhoodContainer', () => {
  it('should render neighborhood cards', () => {
    const { getByText, getByTestId } = render(
      <NeighborhoodContainer
        neighborhoods={[]}
        userName='meg'
      />)

      const containerEl = getByTestId("neighborhoodContainer");
      const headerEl = getByTestId("neighborhoodHeader")
      expect(containerEl).toBeInTheDocument();
      expect(headerEl).toBeInTheDocument();
  });
});
