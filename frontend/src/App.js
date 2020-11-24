import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SignUp from './components/Signup/Signup';
import Login from './components/Login/Login';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import axios from "axios"; // installé


  function App() {
    return (
      <Router>
      <div className="maincontainer">
        <Header/>
          <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/login" component={Login}/>
       <Route path="/signup" component={SignUp}/>
       <Route component={PageNotFound} />
       </Switch>
       <Footer/>
      </div>
      </Router>
    );
  }

export default App;