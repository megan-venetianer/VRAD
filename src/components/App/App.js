import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import NeighborhoodContainer from '../NeighborhoodContainer/NeighborhoodContainer';
// import Neighborhoods from '../Neighborhoods/Neighborhoods';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        username: null,
        email: null,
        tripType: null
      },
      neighborhoods: {

      }
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(data => {
        const promises = data.areas.map(neighborhood => {
          return fetch('http://localhost:3001' + neighborhood.details)
            .then(res => res.json())
            .then(areaInfo => {
              areaInfo.shorthand = neighborhood.area
              console.log(areaInfo)
              return {
                areaInfo
              }
            })
        })
        return Promise.all(promises)
      })
    .then(neighborhoods => this.setState({neighborhoods: neighborhoods}))
    .catch(err => console.log(err))
  }

  loginUser = (loginInfo) => {
    this.setState({userInfo: loginInfo})
  }

  render() {
    return (
    <div>
      <Header isUserLoggedIn={this.state.userInfo.username} clickHandler={this.loginUser}/>
      <Login loginUser={this.loginUser} isUserLoggedIn={this.state.userInfo.username}/>
      <NeighborhoodContainer userName={this.state.userInfo.username} tripType={this.state.userInfo.tripType} neighborhoods={this.state.neighborhoods}/>
     </div>
    )
  }
}

export default App;
