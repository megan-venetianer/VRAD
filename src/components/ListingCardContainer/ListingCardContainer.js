import React from 'react';
import ListingCard from '../ListingCard/ListingCard';
import './ListingCardContainer.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListingCardContainer = ({ username, tripType, currentListing }) => {
  if (username) {
    return(
      <section>
        <h2>
        HELLO
        </h2>
        <ListingCard
          id={currentListing.listing_id}
          key={currentListing.listing_id}
          name={currentListing.name}
        />
        {/*// <ListingCard
        // id={currentListing.listing_id}
        // key={currentListing.listing_id}
        // name={currentListing.name}
        // address={currentListing.address}
        // />*/}
      </section>
    )
  } else {
    return 'hioo'
  }
  }
export default ListingCardContainer

// const ListingCardContainer = ({ username, tripType, currentListing }) => {
//   if(username) {
//     return(
//       <section data-testid="listingCardContainer" className="listing-card-container">
//         <h2 data-testid="neighborhoodHeader" className='greeting'>Hello {username.toUpperCase()}, you are viewing {tripType.toUpperCase()} rentals.
//         </h2>
//           <ListingCard
//             id={currentListing.listing_id}
//             key={currentListing.listing_id}
//             name={currentListing.name}
//             address={currentListing.address}
//             bathrooms={currentListing.details.baths}
//             bedrooms={currentListing.details.beds}
//             cost={currentListing.details.cost_per_night}
//             features={currentListing.details.features}
//           />
//       </section>
//       )
//     } else {
//       return 'error'
//     }
//   }
//
//
// export default ListingCardContainer
