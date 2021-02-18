import React, { Component } from 'react';

import Axios from 'axios';

import DefaultUserPic from '../../uploads/team-female.jpg';

import './Profile.css';
import HeaderSite from '../../components/Header/HeaderSite';
class UserProfile extends Component {
   handleDelete = () => {
     if (window.confirm('Vous nous quittez ?')) {
        const dataValue = `; ${document.cookie}`;
        const elementParts = dataValue.split('; token=');
        const token = elementParts.pop().split(';').shift();

        Axios.delete('http://localhost:3000/user/delete', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
       }).then(() => {
        window.location.href = '/logout';
      })
      .catch((error) => {
        console.log(error);
        window.alert('oopsie, something wrong');
      })
    }
   }
   render() {
    return (
      <div className="App">
        <HeaderSite/>
        <div className="profilecard">
          <div className="card-container">
            <div className="profile-item">
              <img className="card-img" src={DefaultUserPic} alt=""/>
              <div className="cardtext">
                <h2     className="card-title">Bienvenue sur votre profil</h2>
                <h3     className="profile_username">{this.props.username}</h3>
                <p      className="card-text">Diligens periret turbulentos fiduciam turbulentos mota locata concitores ut verum fiduciam praedicto exitiosa die et.  </p>
              </div>
              <div className="buttondelete">
                <button className="btndelete" type="button" data-bs-toggle="tooltip" data-bs-placement="right" title="supprimer votre compte" href="#" onClick={this.handleDelete}>SUPPRIMER</button>
              </div>
            </div>
          </div>      
       </div>
      </div>
    )
  }
}

/**FIXME: reste du code, à revoir, mettre redirect router   */
  



export default UserProfile;





