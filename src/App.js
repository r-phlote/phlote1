import React, {Component} from "react";
//import logo from './vinyl-disc.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useHistory} from "react-router-dom";


//Pages import
import MainPage from "./pages/Home";
import SignUp from "./pages/SignUp";


class App extends Component {
  render () {
    return (
      <div classname="App">
        <Router>
          <Switch>
            <Route exact path="/" component = {MainPage}/>
            <Route exact path="/SignUp" component = {SignUp}/>
          </Switch>
        </Router>
      </div>
    )
  }

}
export default App;
