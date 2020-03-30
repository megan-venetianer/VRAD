import React from 'react';
import ListingCard from './ListingCard.js';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom';

describe('ListingCard', () => {
  let mockRender;

  beforeEach(() => {
      mockRender = render(
      <Router><ListingCard
        id={"mockId"}
        name={"mockName"}
        address={"mockAddress"}
        bathrooms={3}
        bedrooms={5}
        cost={465}
        features={["mockFeature1", "mockFeature2"]}
      />
      </Router>);
  })

  afterEach(() => {
    cleanup()
  })

  it('renders current listing details to the page', () => {

    const { getByText, getAllByTestId } = mockRender;
    const nameEl = getByText("mockName");
    const addressEl = getByText("mockAddress");
    const bathroomEl = getByText("Bathrooms: 3");
    const bedroomEl = getByText("Bedrooms: 5");
    const costEl = getByText("Price per night: $465");
    const featuresEl = getAllByTestId("listing-feature")
    expect(nameEl).toBeInTheDocument();
    expect(addressEl).toBeInTheDocument();
    expect(bathroomEl).toBeInTheDocument();
    expect(bedroomEl).toBeInTheDocument();
    expect(costEl).toBeInTheDocument();
    expect(featuresEl).toHaveLength(2);
  })
})
