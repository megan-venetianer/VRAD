import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logout from '../../images/logout.svg';
import login from '../../images/entry.svg';
import like from '../../images/like.svg'

const Header = (props) => {
  const logInOutButton = () => {
    if (props.isUserLoggedIn) {
      return(
        <div className="log-in-out">
         <span>LOG OUT</span> <img alt="logout" className="logout-button" src={logout} />
        </div>
      )
     } else {
       return (
        <div className="log-in-out">
        <span>LOG IN</span> <img alt="login" className="logout-button" src={login} />
        </div>
       )
     }
  }
  const emptyUser = {
    username: null,
        email: null,
        tripType: null
  }
    return ( <header>
      <p className="tagline">VACATION RENTALS AROUND DENVER</p>
      <h1 className="site-title">VRAD</h1>
      <section className="header-right-icons">
      <Link to = "/" className="no-style" >
      <p className="log-out" onClick={() => props.clickHandler(emptyUser)}>{logInOutButton()}</p>
      </Link>
      <Link to = "/favorites/">
        <button className="like-btn">
        View {props.favesCount ? props.favesCount : null} Favorites
          <img className="like-img" src={like} alt="view favorites" />
        </button>
      </Link>
        </section>
     
    </header>
    )
}

export default Header;
