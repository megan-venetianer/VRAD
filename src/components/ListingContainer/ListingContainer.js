import React, { Component } from 'react'
import Listings from '../Listings/Listings'


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
        <section className="listing-container">
         {
           this.state.listings.map(listing => {
             return (
               <Listings listings={listing} />
             )
           })
         }
        </section>
      )
    } else {
      return ('Loading...')
    }
  }
}

export default ListingContainer