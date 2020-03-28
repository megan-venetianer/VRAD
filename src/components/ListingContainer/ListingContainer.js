import React, { Component } from 'react'
import Listings from '../Listings/Listings'
import './ListingContainer.css'
import loading from '../../images/waiting.svg'


class ListingContainer extends Component {
  constructor() {
    super()
    this.state = {
      listings: null
    }
  }
  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/areas/' + this.props.listId)
      .then(response => response.json())
      .then(data => {
        const promises = data.listings.map(listing => {
          return fetch('http://localhost:3001' + listing)
          .then(res => res.json())
          .then(data => data)
        })
        return Promise.all(promises)
      })
      .then(listings => {
        this.setState({listings})
      })
      .catch(err => console.log(err.msg))
  }
  render() {
    if (this.state.listings) {
      return(
        <div>
<section className='neighborhood-header'>
      <h2 data-testid="neighborhoodHeader" className='greeting'>Hello {this.props.username}, you are viewing {this.props.tripType} rentals</h2>
</section>
        <section className="listing-container">
         {
           this.state.listings.map(listing => {
             return (
               <Listings listings={listing} />
             )
           })
         }
        </section>
        </div>
      )
    } else {
      return ('Loading...')
    }
  }
}

export default ListingContainer

