import React from 'react';
import Neighborhoods from '../Neighborhoods/Neighborhoods';
import './NeighborhoodContainer.css';

const NeighborhoodContainer = (props) => {
  if (props.userInfo) {
    return (
      <section className='neighborhood-container'>
        <h2>Hello {props.userInfo}</h2>
        <Neighborhoods />
      </section>
    )
  } else {
    return '';
  }
};

export default NeighborhoodContainer;
