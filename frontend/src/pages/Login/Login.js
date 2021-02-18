import React, { useState } from "react";
import Axios from 'axios';
import { Link } from 'react-router-dom';
import "./Login.css";
import Header from '../Header/Header';

import SigninPic from '../../uploads/signin-image.jpg';

function Login() {

    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const login = () => {
        Axios.post('http://localhost:3000/user/login', {
          user: {
          email: email,
          password: password
          }
        }).then((response)=>{
            window.location.assign('/post'); 
            }).catch((err)=>{
              console.log(err);
//console.log(response.data); // pour voir si erreur et réponse back
        });
      };

        return (
            <div>
            <Header/>
            <div className="myform form col-md-7 mx-auto">
            <div className="left-form">
             <form  method="post">
              <div className="col-md-12 text-center cardtitle">
				<h1>Connexion</h1>
			  </div>
                <div className="form-group">
                    <label htmlFor="email">Votre email</label>
                    <input type="email"
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    name="email"
                    required={true}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                    type="password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required={true}
                    id="password"
                    />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck1"
                        />
                        <label
                        className="custom-control-label"
                        htmlFor="customCheck1">
                            Se souvenir de moi
                        </label>
                    </div>
                </div>
                <div>
                  <small
                  id="emailHelp"
                  className="form-text text-muted">
                      Ne partagez pas vos accès à ce site
                  </small>
                </div>
                <button
                className="button-click"
                type="submit"
                onClick={login}
                 >
                 SE CONNECTER
                </button>
                <p className="forgot-password text-right">
                    Oubli <a href="www.google.fr">du mot de passe ?</a>
                </p>
             </form>
             </div>
             <div className="right-form">
        <img src={SigninPic} alt="" />
      </div>
            </div>
            </div>
        );
}

export default Login;