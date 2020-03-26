import React from 'react';
import Neighborhoods from '../Neighborhoods/Neighborhoods';
import './NeighborhoodContainer.css';

const NeighborhoodContainer = ({ userName, tripType, neighborhoods }) => {
  if (userName) {
    return (
      <section data-testid="neighborhoodContainer" className='neighborhood-container'>
          <h2 data-testid="neighborhoodHeader" className='greeting'>Hello {userName}, you are viewing {tripType} rentals</h2>
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
    return '';
  }
};

export default NeighborhoodContainer;
