import './Listings.css'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const Listings = ({listings}) => {
  return (
    <section className="listing">
      <h2>{listings.name}</h2>
      <img className="listing-img" src={`../../../images/${listings.listing_id}_a.jpg`} alt={listings.name}/>
      <Link to={`/neighborhoods/${listings.area_id}/listings/${listings.listing_id}`}>
        <button className="more-info">View More Info</button>
      </Link>
    </section>
  )
}

export default Listings


Listings.propTypes = {
  listings: PropTypes.object
}

