import React from 'react';
import './Neighborhoods.css';

const Neighborhoods = ({ name, about }) => {
  return (
    <div className='neighborhood-card'>
      <h3>{name}</h3>
      <p>{about}</p>
      <button>Listings</button>
    </div>
  )
}

export default Neighborhoods;
