import './ListingCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import like from '../../images/like.svg'

const ListingCard = ({ id, name, address, bathrooms, bedrooms, cost, features, addToFavorites, removeFromFavorites, isFavorited }) => {

  const getFaveButton = () => {
    if (isFavorited) {

      return 'Remove From Favorites'
    } else {
      return 'Add To Favorites'
    }
}
  const addOrRemoveFromFaves = (id) => {
    if (isFavorited) {
      return removeFromFavorites(id)
    } else {
      return addToFavorites(id)
    }
  }
  return (
    <div className="listing-details-card">
      <div className="listings-header">
        <h1 className="listing-details-header">{name}</h1>
        <h1 className="listing-address">{address}</h1>
        <h2>${cost}/night</h2>

      </div>
      <div className="listing-img-container">
        <img className="listing-details-img" src={`../../../images/${id}_a.jpg`} alt={name}/>
        <img className="listing-details-img" src={`../../../images/${id}_b.jpg`} alt={name}/>
        <img className="listing-details-img" src={`../../../images/${id}_c.jpg`} alt={name}/>
      </div>
      <div className="listing-details-container">
        <h3>{bedrooms} beds</h3>
        <h3>{bathrooms} baths</h3>
        <h3>Features</h3>
        {features.map(feature => (
          <ul>
            <li data-testid="listing-feature">{feature}</li>
          </ul>
          )
        )}
        <button onClick={() => addOrRemoveFromFaves(id)} data-testid="favorite-button" className="favorite-btn">{getFaveButton()}</button>

      </div>
    </div>
  )
}

export default ListingCard

ListingCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  address: PropTypes.string,
  bathrooms: PropTypes.number,
  bedrooms: PropTypes.number,
  cost: PropTypes.number,
  features: PropTypes.array,
  addToFavorites: PropTypes.func,
  removeFromFavorites: PropTypes.func,
  isFavorited: PropTypes.object
}
