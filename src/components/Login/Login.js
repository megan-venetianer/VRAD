import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      email: null,
      tripType: null,
      isButtonDisabled: true
    }
  }
  updateState = (e) => {
      this.setState({[e.target.id]: e.target.value})
      if (this.state.username && this.state.email && this.state.tripType) {
        this.setState({isButtonDisabled: false})
    }
  }
  preventReload = (event) => {
    event.preventDefault();
    const loginInfo = {
      username: this.state.username,
      email: this.state.email,
      tripType: this.state.tripType
    }
    const { loginUser } = this.props;
    loginUser(loginInfo);
  }
  render() {
    if (!this.props.isUserLoggedIn) {
    return (
      <section className="login-area">
        <form className="login-form">
          <h2>Log In</h2>
          <label for="username">
            <input type="text"
                   id="username"
                   placeholder="username"
                   className="user-input"
                   onChange={this.updateState}>
            </input>
          </label>
          <label for="email address">
            <input type="text"
                   id="email"
                   placeholder="email address"
                   className="user-input"
                   onChange={this.updateState}>
            </input>
          </label>
          <label for="listing type">
            <input type="text"
                   id="tripType"
                   placeholder="listing type"
                   className="user-input"
                   onChange={this.updateState}>
            </input>
          </label>
          
          <button onClick={this.preventReload} disabled={this.state.isButtonDisabled}>
          <Link to="/neighborhoods" className="noStyle">
            Submit
          </Link>
          </button>
        </form>
      </section>
    )
    } else {
    return '';
    }
  }
}

export default Login
