import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';
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
          console.log(neighborhood.details)

          return fetch(neighborhood.details)
          console.log(neighborhood.details)
            .then(res => res.json())

            .then(locationInfo =>
              console.log(locationInfo)
            )
        })
        // console.log(promises)
      })
    // this.setState({})
  }

  loginUser = (loginInfo) => {
    this.setState({userInfo: loginInfo})
  }

  render() {
    return (
    <div>
      <Header />
      <Login loginUser={this.loginUser} isUserLoggedIn={this.state.userInfo.username}/>
      <NeighborhoodContainer userInfo={this.state.userInfo.username}/>
    </div>
    )
  }
}

export default App;
