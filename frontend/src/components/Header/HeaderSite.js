import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/icon-left-font-monochrome-white.svg';
import 'bootstrap/dist/css/bootstrap.css';

function HeaderSite() {
    return(
    <nav className="navbar navbar-expand-md navbar-dark">
      <Link to="/">
        <img src={Logo}/>
      </Link>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <form className="form-inline my-2 my-lg-0">
        <input className="search form-control mr-sm-2" type="search" placeholder="Recherche" aria-label="Search" />
        <button className="search btn-outline-info" type="submit"> <i className="material-icons">search</i></button>
      </form>

        <ul className="navbar-nav">
        <Link className="nav-link" to="/post">
          <button type="button" className="btn btn-outline-info mb-2">
          <li className="nav-item">Publier</li>
        </button>
         </Link>
        <Link className="nav-link" to="/comment">
          <button type="button" className="btn btn-outline-info mb-2">
          <li className="nav-item">Forum</li>
        </button>
         </Link>
        <Link className="nav-link" to="/login">
          <button type="button" className="btn btn-outline-info mb-2">
          <li className="nav-item">Profil</li>
        </button>
         </Link>
         <Link className="nav-link " to="/signup">
          <button type="button" className="btn btn-secondary mb-2">
          <li className="nav-item">Déconnexion</li>
          </button>
         </Link>
        </ul>
        </div>
    </nav>
    )
  }
  
   export default HeaderSite