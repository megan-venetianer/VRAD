import React from 'react';
import ListingCard from '../ListingCard/ListingCard';
import './ListingCardContainer.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListingCardContainer = ({ username, tripType, currentListing, addToFavorites, removeFromFavorites, isFavorited }) => {
  console.log(isFavorited)
  if (username) {
    return(
      <section data-testid="listingCardContainer" className="listing-card-container">
        <h2 data-testid="neighborhoodHeader" className='greeting'>Hello {username.toUpperCase()}, you are viewing the {currentListing.name} listing!
        </h2>
        <ListingCard
          id={currentListing.listing_id}
          key={currentListing.listing_id}
          name={currentListing.name}
          address={currentListing.address.street + ' ' + currentListing.address.zip}
          bathrooms={currentListing.details.baths}
          bedrooms={currentListing.details.beds}
          cost={currentListing.details.cost_per_night}
          features={currentListing.details.features}
          addToFavorites={addToFavorites}
          removeFromFavorites={removeFromFavorites}
          isFavorited = {isFavorited}
        />
      </section>
    )
    } else {
      return 'error'
    }
  }
export default ListingCardContainer


ListingCardContainer.propTypes = {
  username: PropTypes.string,
  tripType: PropTypes.string,
  currentListing: PropTypes.object,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  isFavorited: PropTypes.object
}
