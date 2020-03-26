import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'
import Header from '../Header/Header';
import Login from '../Login/Login';
import NeighborhoodContainer from '../NeighborhoodContainer/NeighborhoodContainer';


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

      <Route path="/login" exact render={(props) => 
      <Login {...props} 
      loginUser={this.loginUser}
      isUserLoggedIn={this.state.userInfo.username}/>}
      />

      <Route path="/areas" render={(props) => 
      <NeighborhoodContainer {...props} 
      tripType={this.state.userInfo.tripType}
      neighborhoods={this.state.neighborhoods}
      username={this.state.userInfo.username}/>}
      />

      
      
      
     </div>
    )
  }
}

export default App;
