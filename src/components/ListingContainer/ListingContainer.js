import React from 'react';
import Listings from '../Listings/Listings';
import './ListingContainer.css';
import PropTypes from 'prop-types';

const ListingContainer = ({ listings, username, tripType, selectedNeighborhood }) => {
  console.log(listings)
  if (listings) {
    return(
      <div data-testid="listing-container">
      <section className='listing-header' >
      <h2 className='greeting'>Hello {username}, you are viewing {tripType} rentals in the {selectedNeighborhood.name} neighborhood!</h2>
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
  listId: PropTypes.number,
  tripType: PropTypes.string,
  neighborhoods: PropTypes.array,
  username: PropTypes.string
}
