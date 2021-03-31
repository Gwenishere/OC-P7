import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from '../../assets/images/icon-left-font-monochrome-white.svg';


import Signout from '../Signout/Signout'

 function Header() {
  return(
  <nav className="header">
    <Link to="/">
      <img className="header_logo" alt="" src={Logo}/>
    </Link>
    <div className="navbar">
      <ul className="navbar_links">
      <Link className="navbar_link" to="/login">
        <button type="button" className="btn_connexion">
        <li className="link_item">Se connecter</li>
      </button>
       </Link>
       <Link className="navbar_link " to="/signup">
        <button type="button" className="btn_inscription">
        <li className="link_item">S'inscrire</li>
        </button>
       </Link>
       <Signout/>
      </ul>
      </div>
  </nav>
  )
}

 export default Header