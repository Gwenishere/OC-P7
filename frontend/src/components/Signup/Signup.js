// import styles from './Signupstyle.css';
// export signup ?
import '../../App.css';
//import axios from "axios"; // installé
import React, { useState } from "react";

function Signup() {
  return (
    <div className="myform form col-md-4 mx-auto">
      <form className="Registration">
      <div className="col-md-12 text-center cardtitle">
        <h1>Inscription</h1>
        </div>
        <div className="form-group">
        <label>Votre email</label>
        <input type="email" name="email" required="true" class="form-control" id="email" aria-describedby="emailHelp" placeholder="____example@groupomania.com____"/>
        </div>
        <div className="form-group">
        <label>Mot de passe</label>
        <input type="text" required="true" class="form-control" placeholder="____mot de passe____"/>
        </div>
      </form>
      <button type="button" className="btn btn-secondary mb-2">Je m'inscris</button>
    </div>
  )
}



export default Signup
