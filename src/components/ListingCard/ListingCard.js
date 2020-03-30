import './ListingCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import like from '../../images/like.svg'

const ListingCard = ({ id, name, address, bathrooms, bedrooms, cost, features }) => {

<<<<<<< HEAD
  return (
    <div className="listing-details-card">
      <div className="listing-header">
        <h1 className="listing-details-header">{name}</h1>
        <button className="favorite-btn">
          Add to Favorites
          <img className="favorite-img" src={like} alt="add to favorites" />
        </button>
      </div>
=======
const ListingCard = ({ id, name, address, bathrooms, bedrooms, cost, features, addToFavorites, isFavorited }) => {
  const getFaveButton = () => {
    if (isFavorited) {
      return 'Remove From Favorites'
    } else {
      return 'Add To Favorites'
    }
}

  return (
    <div className="listing-details-card">
      <h1 className="listing-details-header">{name}</h1>
      <button onClick={() => addToFavorites(id)}className="favorite-btn">{getFaveButton()}</button>
>>>>>>> master
      <div className="listing-img-container">
        <img className="listing-details-img" src={`../../../images/${id}_a.jpg`} alt={name}/>
        <img className="listing-details-img" src={`../../../images/${id}_b.jpg`} alt={name}/>
        <img className="listing-details-img" src={`../../../images/${id}_c.jpg`} alt={name}/>
      </div>
      <div className="features-container">
      <h3>Features</h3>
      {features.map(feature => (
        <ul>
        <li>{feature}</li>
        </ul>
      )
    )}
    </div>
    <div className="listing-details">
      <h3>Bedrooms: {bedrooms}</h3>
      <h3>Bathrooms: {bathrooms}</h3>
      <h2>Price per night: ${cost}</h2>
    </div>
    </div>
  )
}

export default ListingCard
