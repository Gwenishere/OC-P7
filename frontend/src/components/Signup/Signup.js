import '../../App.css';
import axios from "axios"; // installé
import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function Signup(props) {
  const [state , setState] = useState({    //initialisation des valeurs d'état d'e-mail et de mot de passe à l'aide du hook useState
    email : "",
    password : "",
    confirmPassword: "",
    successMessage: null
})
const handleChange = (e) => {
    const {id , value} = e.target   
    setState(prevState => ({
        ...prevState,
        [id] : value
    }))
}

const sendDetailsToServer = () => {
  if(state.email.length && state.password.length) {
      props.showError(null);
      const payload={
          "email":state.email,
          "password":state.password,
      }
      axios.post('http://localhost:3000/signup/', payload)
          .then(function (response) {
              if(response.data.code === 200){
                  setState(prevState => ({
                      ...prevState,
                      'successMessage' : 'Registration successful. Redirecting to home page..'
                  }))
                  redirectToHome();
                  props.showError(null)
              } else{
                  props.showError("Some error ocurred");
              }
          })
          .catch(function (error) {
              console.log(error);
          });    
  } else {
      props.showError('Please enter valid username and password')    
  }
  
}
const redirectToHome = () => {
  props.updateTitle('Home')
  props.history.push('/');
}

const handleSubmitClick = (e) => {
  e.preventDefault();
  if(state.password === state.confirmPassword) {
      sendDetailsToServer()    
  } else {
      props.showError('Passwords do not match');
  }
}
  return (
    <div className="myform form col-md-4 mx-auto">
      <form className="Registration">
      <div className="col-md-12 text-center cardtitle">
        <h1>Inscription</h1>
        </div>
        <div className="form-group">
         <label htmlFor="email">Votre email</label>
          <input value={state.email}
          onChange={handleChange}
          type="email" name="email" required={true} className="form-control" id="email" aria-describedby="emailHelp"/>
        </div>
        <div className="form-group">
         <label htmlFor="password">Mot de passe</label>
          <input value={state.password}
          onChange={handleChange}
          type="password" required={true} className="form-control" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}" title="Doit contenir au moins 1 chiffre, 1 MAJUSCULE, 1 minuscule, entre 8 et 10 caractères" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <input value={state.confirmPassword}
            onChange={handleChange}
            type="password" required={true} className="form-control" id="confirmPassword"/>
        </div>
        <div id="message">
          <p><b>Le mot de passe doit contenir :</b></p>
          <p id="letter">1 minuscule</p>
          <p id="capital">1 MAJUSCULE</p>
          <p id="number">1 chiffre</p>
          <p id="length">Entre 8 et 10 caractères</p>
        </div>
      </form>
      <button type="submit"  onClick={handleSubmitClick} className="btn btn-secondary mb-2">JE M'INSCRIS</button>
      <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
        {state.successMessage}
            </div>
    </div>
  )
}



export default withRouter (Signup)
