import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";

import "./Login.css";
import Header from "../../components/Header/Header";
import SigninPic from "../../uploads/signin-image.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  const login = () => {
    axios
      .post("http://localhost:3000/user/login", {
        user: {
          email: email,
          password: password,
        },
      })
      .then((response) => {
        console.log(response.data);
        localStorage.getItem("email");
      })
      .catch((err) => {
        console.log("message axios : " + err);
      });
  };

  useEffect(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className="login_myform">
        <div className="left-form">
          <form method="post">
            <div className="col-md-12 text-center cardtitle">
              <h1>Connexion</h1>
            </div>
            <div className="form-group">
              <label htmlFor="email">Votre email</label>
              <input
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                required={true}
                value={email}
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
                value={password}
                id="password"
              />
            </div>
            <div className="form-group">
              <div className="custom-control">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  id="customCheck1"
                />
                <label className="checkmark" htmlFor="customCheck1">
                  Mémoriser
                </label>
              </div>
            </div>
            <div>
              <small id="emailHelp" className="form-text text-muted">
                Ne partagez pas vos accès à ce site
              </small>
            </div>
            <button className="button-click" onClick={onSubmit} type="submit">
              SE CONNECTER
            </button>
            <p className="forgot-password text-right">
              Pas de encore inscrit ?
            </p>
            <NavLink to="/signup">J'y vais !</NavLink>
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
