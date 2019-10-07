import React from 'react';
import './App.css';
import HelmetA from './Pages/HelmetA.js';
import HelmetB from './Pages/HelmetB.js'
import HomePage from './Pages/HomePage.js'
import { Router, Link } from "@reach/router";
import './Home.css';

function App() {
  return (
    <div className="App">
      <div className="SelectContainer">
        <div className="Container">
        <Link className="ButtonSelect row" to="/">Home</Link> <Link className="ButtonSelect row" to="/HelmetA">Helmet A</Link> <Link className="ButtonSelect row" to="/HelmetB">Helmet B</Link>
        </div>
      </div>
      <Router>
        <HomePage path='/'/>
        <HelmetA path='/HelmetA' />
        <HelmetB path='/HelmetB'/>
      </Router>
    </div>
  );
}

export default App;
