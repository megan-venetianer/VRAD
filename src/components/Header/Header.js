import React from 'react';
import './Header.css'

const Header = (props) => {
  const logInOutButton = () => {
    if (props.isUserLoggedIn) {
      return 'Log Out'
    } 
  }
  const emptyUser = {
    username: null,
        email: null,
        tripType: null
  }
  return (
    <header>
      <p className="tagline">Vacation Rental Agency of Denver</p>
      <h1 className="site-title">VRAD</h1>
      <p className="log-out" onClick={() => props.clickHandler(emptyUser)}>{logInOutButton()}</p>
    </header>
  )
}

export default Header;
