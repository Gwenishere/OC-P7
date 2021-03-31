import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';
import Home from './pages/Home/Home';
import SignUp from './pages/Signup/Signup';
import Login from './pages/Login/Login';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Post from './components/Post/PostForm';
import Profile from './pages/Profile/Profile';
import Footer from './components/Footer/Footer';

import './App.css';


//import axios from "axios"; // installé

  function App() {
    return (
      <Router>
      <div className="maincontainer">
          <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/login" component={Login} />
       <Route path="/signup" component={SignUp} />
       <Route path="/post" component={Post} />
       <Route path="/profile" component={Profile} />
       <Route component={PageNotFound} />
       </Switch>
       <Footer/>
      </div>
      </Router>
    );
  }

export default App;