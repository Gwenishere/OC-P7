import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <div className="myform form col-md-4 mx-auto">
             <form  method="post">
              <div className="col-md-12 text-center cardtitle">
				<h1>Connexion</h1>
			  </div>
                <div className="form-group">
                    <label htmlFor="email">Votre email</label>
                    <input type="email" name="email" required={true} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" required={true} id="password" className="form-control" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Se souvenir de moi</label>
                    </div>
                </div>
                <div>
                <small id="emailHelp" className="form-text text-muted">Ne partagez pas vos accès à ce site</small>
                </div>
                <button type="submit" className="btn btn-outline-info col-md-12  text-center" >SE CONNECTER
                </button>
                <p className="forgot-password text-right">
                    Oubli <a href="www.google.fr">du mot de passe ?</a>
                </p>
             </form>
            </div>
        );
    }
}