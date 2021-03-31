// eslint-disable-next-line
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import Header from '../../components/Header/Header';

import './Signupstyle.css';
import SignupPic from '../../uploads/signup-image.jpg';

function Signup() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); //initialisation des valeurs d'état d'e-mail et de mot de passe à l'aide du hook useState
  const [user_id, setuser_id] = useState('');
 
  const signup = () => {
    Axios.post('http://localhost:3000/user/signup', {
      user:{
      username: username,  
      email: email,
      password: password,
      user_id: false   // à revoir 
      }
    }).then((response)=>{
    console.log(response.user.data);
    window.location.assign('/login');
    }).catch((err)=>{
      console.log(err.message);
      console.log('message axios post signup')
    })
  };

  return (
  <div>
    <Header/>
    <div className="myform form col-md-7 mx-auto">
      <div className="left-form">
        <form className="Registration">
        <div className="col-md-12 text-center cardtitle">
          <h1>Inscription</h1>
        </div>
        <div className="form-group">
         <label htmlFor="username">Nom utilisateur</label>
          <input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          name ="username"
          required={true}
          className="form-input"
          id="username"
          aria-describedby="userHelp"/>
        </div>
        <div className="form-group">
         <label htmlFor="email">Email</label>
          <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          name="email"
          required={true}
          className="form-input"
          id="email"
          aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
         <label htmlFor="password">Mot de passe</label>
          <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          aria-label={password}
          type="password"
          required={true}
          className="form-input"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Doit contenir au moins 1 chiffre, 1 MAJUSCULE, 1 minuscule, minimum 8 caractères"
          maxLength={64} />
        </div>
        <div id="message">
          <p><b>Le mot de passe doit contenir :</b></p>
          <p id="letter">1 minuscule</p>
          <p id="capital">1 MAJUSCULE</p>
          <p id="number">1 chiffre</p>
          <p id="length">Minimum 8 caractères</p>
        </div>
        <div>
         <button
         className="button-click"
         type="submit"
         onClick={signup} >
         ENREGISTRER
         </button>
        </div>
      </form>
      </div>
      <div className="right-form">
        <img src={SignupPic} alt="" />
      </div>
    </div>
    </div>
  )
}
export default Signup 