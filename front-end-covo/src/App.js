import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import "./App.css";
//import { connect } from 'react-redux';
import NavbarPage from "./components/Navbar/navbar";
import Authentification from "./components/authentification";
import AdCard from "./components/AdsPages/ad";
import Signup from "./components/signup";
import ParcelAd from "./components/ParcelPages/ParcelAd";
import PathAd from "./components/PathsPages/PathAd";
import Profile from "./components/AccountPages/Profile";
import Account from "./components/AccountPages/Account";
import LandingPage from "./components/LandingPage/landingPage";
import FooterPage from "./components/footer";

class App extends Component {
  state = {
    ads: []
  
  }
  render() {
    return (
      <Router>
        <div>
          <NavbarPage />
          {/* <FooterPage /> */}
          <Switch>
            <Route exact path="/">
            <LandingPage />
            </Route>
            <Route path="/Profile">
              <Profile /> 
            </Route>
            <Route path="/Moncompte">
             <Account />
            </Route>
            <Route path="/MesAnnonces">
              Mes annonces 
            </Route>
            <Route path="/MesTrajets">
              Mes trajets 
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
            <Route path="/Trajet">
              <PathAd />
            </Route>
            <Route path="/Colis">
              <ParcelAd />
            </Route>
          </Switch>
        
        </div>
      </Router>
    );
  }
}
export default App;
