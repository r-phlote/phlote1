//import React from 'react';
import React, { useEffect, useState } from 'react'
import logo from '../vinyl-disc.svg';
import '../App.css';
import Fortmatic from 'fortmatic';
import Button from "react-bootstrap/Button";
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory} from "react-router-dom";
//import {Redirect} from 'react-router-dom';  
//import SignUp from './SignUp'

// Works for web3 1.0 and pre-1.0 versions
import Web3 from 'web3';

const fm = new Fortmatic('pk_live_80D32598ABBBEF7F');
const web3 = new Web3(fm.getProvider());
window.web3 = web3;

//function Content(){
//  let history = useHistory();
  

//  function handleClick() {
//      history.push("/SignUp");
//  }
  
//  return (
//    <div>
//        <button onClick={handleClick}>Click me</button>
//    </div>
//)

//}


function App() {

  return (
    
    <div className="App">
        <header className="App-header">
        <iframe className = "video-background" title="WIP - Sea Surface Temperature" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="fullscreen; autoplay; vr" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/10074333d322466493fa6afc95b68829/embed?autostart=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark"> </iframe>            
        <img src={logo} className="App-logo" alt="logo" />        
        <h1>Join Phlote</h1>
        <div>
          <Button href="https://www.phlote.co">Phlote Main Page</Button> {' '}
          <Link to = '/SignUp'>
            <Button> 
                Get a Phlote Web3 Account
            </Button>{}
          </Link>
        </div>
        </header>
    </div>
  );
}

export default App;
