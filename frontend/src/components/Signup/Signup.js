import '../../App.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from 'axios';
import Header from '../Header/Header';

  
function Signup() {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); //initialisation des valeurs d'état d'e-mail et de mot de passe à l'aide du hook useState
  
 
  //**FIXME: je laisse l'objet ainsi ??, pas compris ! */
  const signup = () => {
    Axios.post('http://localhost:3000/user/signup', {
      user:{
      username: username,  
      email: email,
      password: password
      }
    }).then((response)=>{
    window.location.assign('/login'); 
    }).catch((err)=>{
      console.log(err);
    })
  };

  return (
    <div>
      <Header/>
    <div className="myform form col-md-4 mx-auto">    
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
          type="text" name ="username" required={true} className="form-control" id="username" aria-describedby="userHelp"/>
        </div>
        <div className="form-group">
         <label htmlFor="email">Email</label>
          <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email" name="email" required={true} className="form-control" id="email" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
         <label htmlFor="password">Mot de passe</label>
          <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password" required={true} className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Doit contenir au moins 1 chiffre, 1 MAJUSCULE, 1 minuscule, entre 8 et 10 caractères" maxLength={10} />
        </div>
        <div id="message">
          <p><b>Le mot de passe doit contenir :</b></p>
          <p id="letter">1 minuscule</p>
          <p id="capital">1 MAJUSCULE</p>
          <p id="number">1 chiffre</p>
          <p id="length">Entre 8 et 10 caractères</p>
        </div>
      </form>

      <button type="submit"
      onClick={signup}
      className="btn btn-secondary mb-2">
        JE M'INSCRIS
      </button>

    </div>
    </div>
  )
}
export default Signup // Router ok ou en trop?
