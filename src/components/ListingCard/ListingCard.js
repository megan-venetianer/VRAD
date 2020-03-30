import './ListingCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import like from '../../images/like.svg'

const ListingCard = ({ id, name, address, bathrooms, bedrooms, cost, features }) => {

  return (
    <div className="listing-details-card">
      <h1 className="listing-details-header">{name}</h1>
      <button className="favorite-btn">
        Add to Favorites
        <img className="favorite-img" src={like} alt="add to favorites" />
      </button>
      <div className="listing-img-container">
        <img className="listing-details-img" src={`../../../images/${id}_a.jpg`} alt={name}/>
        <img className="listing-details-img" src={`../../../images/${id}_b.jpg`} alt={name}/>
        <img className="listing-details-img" src={`../../../images/${id}_c.jpg`} alt={name}/>
      </div>
      <h3>Bedrooms: {bedrooms}</h3>
      <h3>Bathrooms: {bathrooms}</h3>
      <h3>Features</h3>
      {features.map(feature => (
        <ul>
          <li>{feature}</li>
        </ul>
        )
      )}
      <h2>Price per night: ${cost}</h2>
    </div>
  )
}

export default ListingCard
