import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/icon-left-font-monochrome-white.svg';
import "./HeaderSite.css"

import Signout from '../Signout/Signout'

 function HeaderSite() {
  return(
  <nav className="header">
    <Link to="/">
      <img className="header_logo" alt="" src={Logo}/>
    </Link>
      
    <div className="navbar">
      <ul className="navbar_links">
      <Link className="navbar_link" to="/post">
        <button type="button" className="btn_forum">
        <li className="link_item">Forum</li>
      </button>
       </Link>
      <Link className="navbar_link" to="/profile">
        <button type="button" className="btn_connexion">
        <li className="link_item">Profil</li>
      </button>
       </Link>
       <Signout/>
      </ul>
      </div>
  </nav>
  )
}
  
   export default HeaderSite