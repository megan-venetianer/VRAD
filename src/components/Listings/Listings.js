import './Listings.css'
import React from 'react'


const Listings = ({listings}) => {
console.log(listings)
  return (
    <section className="listing">
      <h2>{listings.name}</h2>
      <p>{listings.address.street}</p>
    </section>
  )
}

export default Listings