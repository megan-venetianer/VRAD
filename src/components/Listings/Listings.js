import './Listings.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Listings = ({listings}) => {
console.log(listings)
  return (
    <section className="listing">
      <h2>{listings.name}</h2>
      <img src={`/../../../public/images/${listings.listing_id}_a.jpg`} alt={listings.name}/>
      <Link to={`/neighborhoods/${listings.area_id}/listings/${listings.listing_id}`}>
        <button className="more-info">View More Info</button>
      </Link>
      <p>{listings.address.street}</p>
    </section>
  )
}

export default Listings
