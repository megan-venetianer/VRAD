import React, { Component } from 'react'
import Listings from '../Listings/Listings'
import './ListingContainer.css'
// import loading from '../../images/waiting.svg'
import PropTypes from 'prop-types';


class ListingContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentListing: null
    }
  }
  render() {
    console.log(this.props)
    if (this.props.listings) {
      return(
        <div data-testid="listing-container">
<section className='listing-header' >
      <h2 className='greeting'>Hello {this.props.username}, you are viewing {this.props.tripType} rentals</h2>
</section>
        <section
        className="listing-container">
         {
           this.props.listings.map(listing => {
             return (
               <Listings name={listing.name} area_id={listing.area_id} listing_id={listing.listing_id} />
             )
           })
         }
        </section>
        </div>
      )
    } else {
      return (<div data-testid="listing-container">
        Loading...
        </div>)
    }
  }
}

export default ListingContainer


ListingContainer.propTypes = {
  listId: PropTypes.number,
  tripType: PropTypes.string,
  neighborhoods: PropTypes.array,
  username: PropTypes.string
}




