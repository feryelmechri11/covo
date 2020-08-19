import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//import { connect } from 'react-redux';
import NavbarPage from "./components/Navbar/navbar";
import Authentification from "./components/authentification";
import AdCard from "./components/AdsPages/ad";
import Signup from "./components/signup";

class App extends Component {
  state = {
    ads: []
  
  }
  render() {
    return (
      <Router>
        <div>
          <NavbarPage />
          <Switch>
            <Route exact path="/">
              LAnding Page
            </Route>
            <Route path="/Auth">
              <Authentification />
            </Route>
            <Route path="/Inscription">
              <Signup />
            </Route>
            <Route path="/ADS">
              <AdCard />
            </Route>
            <Route path="/Trajet">lzhfmzehfmhz</Route>
            <Route path="/Colis">Colis</Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
