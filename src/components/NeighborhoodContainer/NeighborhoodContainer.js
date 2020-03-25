import React from 'react';
import Neighborhoods from '../Neighborhoods/Neighborhoods';
import './NeighborhoodContainer.css';

const NeighborhoodContainer = (props) => {
  
  if (props.userInfo) {
    return (
      <section className='neighborhood-container'>
        <h2>Hello {props.userInfo}</h2>
        {console.log(props.neighborhoods)}
        {
          props.neighborhoods.map(neighborhood => (
            <Neighborhoods
              id={neighborhood.areaInfo.id}
              key={neighborhood.areaInfo.id}
              name={neighborhood.areaInfo.name}
              location={neighborhood.areaInfo.location}
              about={neighborhood.areaInfo.about}
              region_code={neighborhood.areaInfo.region_code}
              quick_search={neighborhood.areaInfo.quick_search}
              listings={neighborhood.areaInfo.listings}
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
