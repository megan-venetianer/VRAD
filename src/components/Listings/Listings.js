import './Listings.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Listings extends Component {
  constructor(props) {
    super(props)
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
      return (
        <div>
         <h2>
           {/* {console.log(this.state.listings)} */}
           {this.state.listings.map(listing => listing.name)}
         </h2>
       </div>
        )
    } else {
      return (
        'Loading...'
      )
    }

  }
}

export default Listings
