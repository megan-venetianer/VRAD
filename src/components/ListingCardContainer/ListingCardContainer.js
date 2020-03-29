import React from 'react';
import ListingCard from '../ListingCard/ListingCard';
import './ListingCardContainer.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListingCardContainer = ({ username, tripType, currentListing }) => {
    return(
      <section data-testId="listingCardContainer" className="listing-card-container">
        <h2 data-testid="neighborhoodHeader" className='greeting'>Hello {this.props.username.toUpperCase()}, you are viewing {this.props.tripType.toUpperCase()} rentals.
        </h2>
          <ListingCard
            id={currentListing.listing_id}
            key={currentListing.listing_id}
            name={currentListing.name}
            address={currentListing.address}
            bathrooms={currentListing.details.baths}
            bedrooms={currentListing.details.beds}
            cost={currentListing.details.cost_per_night}
            features={currentListing.details.features}
          />
      </section>
    )
  }


export default ListingCardContainer
