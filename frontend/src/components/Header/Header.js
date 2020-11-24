import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Logo from '../../assets/images/icon-left-font-monochrome-white.svg';
import 'bootstrap/dist/css/bootstrap.css';


/**TODO: 
 * utiliser router et redirect
 * liens vers comments, profile, deconnexion
 * un input rechercher?
 */

 function Header() {
  return(
  <nav className="navbar navbar-expand-md navbar-dark">
    <Link to="/">
      <img src={Logo}/>
    </Link>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
      <Link className="nav-link" to="/login">
        <button type="button" className="btn btn-outline-info mb-2">
        <li className="nav-item">Connexion</li>
      </button>
       </Link>
       <Link className="nav-link " to="/signup">
        <button type="button" className="btn btn-secondary mb-2">
        <li className="nav-item">Inscription</li>
        </button>
       </Link>
      </ul>
      </div>
  </nav>
  )
}

 export default Header