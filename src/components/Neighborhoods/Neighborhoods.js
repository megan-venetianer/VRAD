import React from 'react';
import { Link } from 'react-router-dom'
import './Neighborhoods.css';
import PropTypes from 'prop-types';

const Neighborhoods = ({ name, about, shorthand, id }) => {

  return (
    <div className='neighborhood-card'>
      <h2 className='neighborhood-header'>{name} ({shorthand})</h2>
      <p>{about}</p>
      <button className='listing-btn'>
        <Link to={`neighborhoods/${id}/listings/`}>
          View Listings
        </Link>
      </button>
    </div>
  )
}

export default Neighborhoods;

Neighborhoods.propTypes = {
  name: PropTypes.string,
  about: PropTypes.string,
  shorthand: PropTypes.string,
  id: PropTypes.number
}
