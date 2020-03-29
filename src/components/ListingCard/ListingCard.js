import './ListingCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListingCard = ({ id, name, address, bathrooms, bedrooms, cost, features }) => {

  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
    </div>
  )
}

export default ListingCard
