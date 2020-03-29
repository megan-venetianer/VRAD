import './ListingCard.css';
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListingCard = ({ name, address, bathrooms, bedrooms, cost, features }) => {
  console.log(name)
  return (
    <div>
      <p>{name}</p>
      <p>{address}</p>
    </div>
  )
}

export default ListingCard
