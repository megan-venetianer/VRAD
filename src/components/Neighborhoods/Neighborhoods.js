import React from 'react';
import './Neighborhoods.css';

const Neighborhoods = ({ name, about }) => {
  return (
    <div className='neighborhood-card'>
      <h2>{name}</h2>
      <p>{about}</p>
      <button className='listing-btn'>View Listings</button>
    </div>
  )
}

export default Neighborhoods;
