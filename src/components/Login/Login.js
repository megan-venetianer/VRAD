import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      username: null,
      email: null,
      tripType: null,
      isButtonDisabled: true
    }
  }
  updateState = (e) => {
      this.setState({[e.target.id]: e.target.value})
      this.isFormValid()
  }
  isFormValid = () => {
    if (this.state.username && this.state.email && this.state.tripType) {
      this.setState({isButtonDisabled: false})
    } else {
      this.setState({isButtonDisabled: true})
    }
  }
  render() {
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
          <button disabled={this.state.isButtonDisabled}>
            Submit
          </button>
        </form>
      </section>
    )
  }
}

export default Login