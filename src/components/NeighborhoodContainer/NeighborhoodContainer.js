import React from 'react';
import Neighborhoods from '../Neighborhoods/Neighborhoods';
import './NeighborhoodContainer.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NeighborhoodContainer = ({ username, tripType, neighborhoods }) => {
  if (username) {
    return (
      <section data-testid="neighborhoodContainer" className='neighborhood-container'>
          <h2 data-testid="neighborhoodHeader" className='greeting'>Hello {username}, you are viewing {tripType} rentals</h2>
        {
          neighborhoods.map(neighborhood => (
            <Neighborhoods
              id={neighborhood.areaInfo.id}
              key={neighborhood.areaInfo.id}
              name={neighborhood.areaInfo.name}
              location={neighborhood.areaInfo.location}
              about={neighborhood.areaInfo.about}
              region_code={neighborhood.areaInfo.region_code}
              quick_search={neighborhood.areaInfo.quick_search}
              listings={neighborhood.areaInfo.listings}
              shorthand={neighborhood.areaInfo.shorthand}
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
