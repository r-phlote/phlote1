//import React from 'react';
import React, { useEffect, useState } from 'react'
import logo from './vinyl-disc.svg';
import './App.css';
import Fortmatic from 'fortmatic';

import {BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory} from "react-router-dom";
//import {Redirect} from 'react-router-dom';  
import SignUp from './SignUp'

// Works for web3 1.0 and pre-1.0 versions
import Web3 from 'web3';

const fm = new Fortmatic('pk_live_80D32598ABBBEF7F');
const web3 = new Web3(fm.getProvider());
window.web3 = web3;

function Content(){
  let history = useHistory();
  

  function handleClick() {
      history.push("/SignUp");
  }
  
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
    </div>
)

}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Phlote</h1>
          <button onClick={() => history.push('/SignUp')}>
            Signup
          </button>
      </header>
    </div>
  );
}

export default App;
