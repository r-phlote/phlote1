import React, {Component} from "react";
import logo from '../vinyl-disc.svg';
import '../App.css';
import Link from 'react-dom';

//Fortmatic
//import Fortmatic from 'fortmatic';
//import Web3 from 'web3';

//const fm = new Fortmatic('pk_live_80D32598ABBBEF7F');
//const web3 = new Web3(fm.getProvider());
//window.web3 = web3;

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