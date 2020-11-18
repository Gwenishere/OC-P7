import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  
  render() {
    return (
     <div className="maincontainer">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
   )
  };
}

export default App;