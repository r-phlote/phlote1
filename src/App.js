import React, {Component} from "react";
//import logo from './vinyl-disc.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory} from "react-router-dom";


//Pages import
import MainPage from "./pages";
import SignUp from "./pages/SignUp";


class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component = {MainPage}/>
          <Route exact path="/SignUp" component = {SignUp}/>
        </Switch>
      </Router>
    )
  }

}
export default App;
