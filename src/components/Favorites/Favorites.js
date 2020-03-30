import React from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css'

const Favorites = ({name, area_id, listing_id, findCurrentListing, remove}) => {

  return (
    <section className="favorite">
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
