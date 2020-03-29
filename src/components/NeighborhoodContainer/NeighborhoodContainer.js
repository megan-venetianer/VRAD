import React from 'react';
import Neighborhoods from '../Neighborhoods/Neighborhoods';
import './NeighborhoodContainer.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NeighborhoodContainer = ({ username, tripType, neighborhoods }) => {
  if (neighborhoods) {
    return (
      <section data-testid="neighborhoodContainer" className='neighborhood-container'>
          <h2 data-testid="neighborhoodHeader" className='greeting'>Hello {username.toUpperCase()}, you are viewing {tripType.toUpperCase()} rentals. Here are some neighborhoods we found for you!</h2>
        {
          neighborhoods.map(neighborhood => (
            <Neighborhoods
              id={neighborhood.id}
              key={neighborhood.id}
              name={neighborhood.name}
              location={neighborhood.location}
              about={neighborhood.about}
              region_code={neighborhood.region_code}
              quick_search={neighborhood.quick_search}
              listings={neighborhood.listings}
              shorthand={neighborhood.shorthand}
            />
          ))
        }
      </section>
    )
  } else {
    return <section className='neighborhood-container'>
      <Link to="/" className="log-in">
      Please Log In
      </Link>
    </section>;
  }
};

export default NeighborhoodContainer;

NeighborhoodContainer.propTypes = {
  username: PropTypes.string,
  tripType: PropTypes.string,
  neighborhoods: PropTypes.array
}
