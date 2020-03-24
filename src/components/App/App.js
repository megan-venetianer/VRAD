import React, { Component } from 'react';
// import logo from '../../logo.svg';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        username: null,
        email: null,
        tripType: null
      }
    }
  }

  loginUser = (loginInfo) => {
    this.setState({userInfo: loginInfo})
    console.log(loginInfo)
    console.log(this.state)
  }

  render() {
    return (
    <div>
      <Header />
      <Login loginUser={this.loginUser}/>
    </div>
    )
  }
}

export default App;
