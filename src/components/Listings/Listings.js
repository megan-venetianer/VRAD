import './Listings.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const Listings = ({listings}) => {
console.log(listings)
  return (
    <section className="listing">
      <h1>{listings.name}</h1>
      <h2>{listings.address.street}</h2>
    </section>
  )
}

export default Listings
