import React from 'react';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
  import Logo from '../../assets/images/icon-left-font-monochrome-white.svg';


class Homeheader extends React.Component
{
  render ()
  {
    return (
    <nav className="navbar navbar-expand-md navbar-dark">
     <a className="nav-link active" href="#"><img src={Logo}/></a>
     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="collapsibleNavbar">
     <ul className="navbar-nav">
       <button type="button" className="btn mb-2">
      <li className="nav-item">
        <a className="nav-link" href="#">Connexion</a>
      </li>
      </button>
      <button type="button" className="btn btn-secondary mb-2">
      <li className="nav-item">
        <a className="nav-link " href="#"><i className="fas fa-user-plus"></i>Inscription</a>
      </li>
      </button>
     </ul>
     </div>
    </nav>
    )
  }
}
export default Homeheader;