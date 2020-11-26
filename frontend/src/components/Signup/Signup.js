import '../../App.css';
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import Axios from 'axios';
  
function Signup() {

  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState(''); //initialisation des valeurs d'état d'e-mail et de mot de passe à l'aide du hook useState

  const register = () => {
    Axios.post('http://localhost:3000/signup', {
      email: emailReg,
      password: passwordReg
    }).then((response)=>{
      console.log(response); // pour voir si erreur
    }
    )
  };

  return (
    <div className="myform form col-md-4 mx-auto">
      <form className="Registration">
      <div className="col-md-12 text-center cardtitle">
        <h1>Inscription</h1>
        </div>
        <div className="form-group">
         <label htmlFor="email">Votre email</label>
          <input
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
          type="email" name="email" required={true} className="form-control" id="email" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
         <label htmlFor="password">Mot de passe</label>
          <input
          onChange={(e) => {
            setPasswordReg(e.target.value);
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
      onClick={register}
      className="btn btn-secondary mb-2">
        JE M'INSCRIS
      </button>
    </div>
  )
}

export default withRouter (Signup)
