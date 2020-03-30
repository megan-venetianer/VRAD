import React from 'react';
import Listings from './Listings.js';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import '@testing-library/jest-dom';

describe('Listings', () => {
  it('renders listing information to each card', () => {
    const { getByText } = render(
      <Router><Listings
        name={"mockname"}
        area_id={"5"}
        listing_id={"50"}
        /></Router>);

    const nameEl = getByText("mockname");
    expect(nameEl).toBeInTheDocument();
  });
});

// fetch('http://localhost:3001/api/v1/areas/' + this.props.listId)
// .then(response => response.json())
// .then(data => {
//   const promises = data.listings.map(listing => {
//     return fetch('http://localhost:3001' + listing)
//     .then(res => res.json())
//     .then(data => data)
//   })
//   return Promise.all(promises)
// })
// .then(listings => {
//   this.setState({listings})
// })
// .catch(err => err.message)
