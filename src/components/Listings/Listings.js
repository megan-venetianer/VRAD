import './Listings.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Listings = ({name, listing_id, area_id }) => {
  return (
    <section className="listing">
      <h2>{name}</h2>
      <img className="listing-img" src={`../../../images/${listing_id}_a.jpg`} alt={name}/>
      <Link to={`/neighborhoods/${area_id}/listings/${listing_id}`}>
        <button className="more-info">View More Info</button>
      </Link>
    </section>
  )
}

export default Listings


Listings.propTypes = {
  name: PropTypes.string,
  listing_id: PropTypes.number,
  area_id: PropTypes.number,
  findCurrentListing: PropTypes.func
}
