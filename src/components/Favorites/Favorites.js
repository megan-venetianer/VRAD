import React from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css'
import PropTypes from 'prop-types';

const Favorites = ({name, area_id, listing_id, findCurrentListing, remove}) => {

  return (
    <section className="favorite" data-testid="favorites-card">
    <h2>{name}</h2>
    <img className="favorite-img" src={`../../../images/${listing_id}_a.jpg`} alt={name}/>
    <Link to={`/neighborhoods/${area_id}/listings/${listing_id}`}>
      <button onClick={findCurrentListing} className="more-info">View More Info</button>
    </Link>
      <button className="remove-btn" onClick={() => remove(listing_id)}>
        Remove From Favorites
      </button>
  </section>
  )
}

export default Favorites

Favorites.propTypes = {
  name: PropTypes.string,
  listing_id: PropTypes.number,
  area_id: PropTypes.number,
  findCurrentListing: PropTypes.func,
  remove: PropTypes.func
}
