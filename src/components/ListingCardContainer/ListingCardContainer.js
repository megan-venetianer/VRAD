import React from 'react';
import ListingCard from '../ListingCard/ListingCard';
import './ListingCardContainer.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListingCardContainer = ({ username, tripType, currentListing }) => {
  return (
    <section data-testId="listingCardContainer" className="listing-card-container">
      <h2 data-testid="neighborhoodHeader" className='greeting'>Hello {username.toUpperCase()}, you are viewing {tripType.toUpperCase()} rentals. Here are some neighborhoods we found for you!</h2>
        <ListingCard
          
        />
    </section>
  )
}

export default ListingCardContainer
