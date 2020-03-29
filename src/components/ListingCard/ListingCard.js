import './ListingCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListingCard = ({ id, name, address, bathrooms, bedrooms, cost, features }) => {

  return (
    <div className="listing-details-card">
      <h1 className="listing-details-header">{name}</h1>
      <h3>Bedrooms: {bedrooms}</h3>
      <h3>Bathrooms: {bathrooms}</h3>
      {features.forEach(feature =>
        <ul>feature</ul>
      )}
      <h2>Price per night: ${cost}</h2>
    </div>
  )
}

export default ListingCard
