import React from 'react';
import Listings from '../Listings/Listings';
import './ListingContainer.css';
import PropTypes from 'prop-types';

const ListingContainer = ({ listings, username, tripType, selectedNeighborhood }) => {
  if (listings) {
    return(
      <div data-testid="listing-container">
      <section className='listing-header' >
      <h2 className='greeting'>Hello {username.toUpperCase()}, you are viewing {tripType.toUpperCase()} rentals in the {selectedNeighborhood.name} neighborhood! Here are some listings we found for you!</h2>
      </section>
      <section
      className="listing-container">
       {
         listings.map(listing => {
           return (
             <Listings
              name={listing.name}
              area_id={listing.area_id}
              listing_id={listing.listing_id}
               />
           )
         })
       }
      </section>
      </div>
    )
  } else {
    return (<div data-testid="listing-container">
      Loading...
      </div>)
  }
}

export default ListingContainer

ListingContainer.propTypes = {
  tripType: PropTypes.string,
  listings: PropTypes.array,
  username: PropTypes.string,
  selectedNeighborhood: PropTypes.object
}
