import React, {Component} from "react";
import logo from '../vinyl-disc.svg';
import '../App.css';
import Link from 'react-dom';
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import SignUp from "./SignUp"

//Fortmatic
//import Fortmatic from 'fortmatic';
//import Web3 from 'web3';

//const fm = new Fortmatic('pk_live_80D32598ABBBEF7F');
//const web3 = new Web3(fm.getProvider());
//window.web3 = web3;

//$("SignUp").on('click', function (e) {

//    <Link to="/SignUp"/>
//})
//<Button href="https://www.cnn.com">Link</Button> {' '}
//<Button id="Sign Up" type="submit">
//  Button
//<Link to = '/SignUp' />
//</Button>{' '}

const MainPage = () => {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Welcome to Phlote</h1>

          </header>
        </div>
      );
}

export default MainPage;