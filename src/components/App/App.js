import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import NeighborhoodContainer from '../NeighborhoodContainer/NeighborhoodContainer';
import ListingContainer from '../ListingContainer/ListingContainer.js';
import ListingCardContainer from '../ListingCardContainer/ListingCardContainer.js';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        username: null,
        email: null,
        tripType: null
      },
      neighborhoods: [],
      listings: [],
      favorites: [],
      // currentListing: null
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(data => {
        let n = []
        let l = []
        const promises = data.areas.map(neighborhood => {
          return fetch('http://localhost:3001' + neighborhood.details)
            .then(res => res.json())
            .then(areaInfo => {
              areaInfo.shorthand = neighborhood.area
              n.push(areaInfo)
              this.setState({neighborhoods: n})
              return {
                areaInfo
              }
            })
            .then(area => {
               const listingPromises = area.areaInfo.listings.map(listing => {
                return fetch('http://localhost:3001' + listing)
                .then(res => res.json())
                .then(data => l.push(data))
              })
              return Promise.all(listingPromises)
            })
            .then(listings => this.setState({listings: l}))
        })
        return Promise.all(promises)
      })
    .catch(err => err.message)
  }

  loginUser = (loginInfo) => {
    this.setState({userInfo: loginInfo})
  }

  filterListings = (id) => {
    return this.state.listings.filter(listing => listing.area_id === id)
  }

  findCurrentListing = (listingId) => {
    return this.state.listings.find(listing => listing.listing_id === listingId)
  }
  addToFavorites = (id) => {
    let favorited = this.state.listings.filter(listing => listing.listing_id === id)
      let newFavorites = [...this.state.favorites, ...favorited]
      this.setState({favorites: newFavorites})
    let filtered = this.state.favorites.filter(favorite => favorite.listing_id !== id)
    // if (filtered.length !== favorited.length) {
    //   this.setState({favorites: filtered})
    // }
  }

  render() {
    return (
    <div>
      <Header isUserLoggedIn={this.state.userInfo.username}       clickHandler={this.loginUser}/>
      <Route path="/" exact render={(props) =>
      <Login {...props}
        loginUser={this.loginUser}
        isUserLoggedIn={this.state.userInfo.username}/>}
      />
      <Route path="/neighborhoods" exact render={(props) =>
      <NeighborhoodContainer {...props}
        tripType={this.state.userInfo.tripType}
        neighborhoods={this.state.neighborhoods}
        username={this.state.userInfo.username}/>}
      />
      <Route path="/neighborhoods/:id/listings/" exact render={(props) => {
        const { match } = props;
        const { params } = match;
        return <ListingContainer {...props}
        listId = {parseInt(params.id)}
        tripType={this.state.userInfo.tripType}
        neighborhoods={this.state.neighborhoods}
        username={this.state.userInfo.username}
        listings={this.filterListings(parseInt(params.id))}/>}
      }
      />
      <Route path="/neighborhoods/:id/listings/:listingId/" render={(props) => {
        const { match } = props;
        const { params } = match;
        
        return <ListingCardContainer {...props}
        listingId={parseInt(params.listingId)}
        isFavorited={this.state.favorites.find(listing => listing.listing_id === parseInt(params.listingId))}
        currentListing={this.findCurrentListing(parseInt(params.listingId))}
        tripType={this.state.userInfo.tripType}
        username={this.state.userInfo.username}
        addToFavorites={this.addToFavorites}/>}
      }
      />
      <Route path="/favorites/" render={(props) => {
        const { match } = props;
        const { params } = match;
        return <FavoritesContainer faves={this.state.favorites} findCurrentListing={parseInt(params.listingId)}/>
      }
      }
      />
     </div>
    )
  }
}

export default App;
